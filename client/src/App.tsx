import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
import PublicLayout from "./layouts/PublicLayout";
import authApi from "./state/api/userApi";
import { useAppDispatch, useAppSelector } from "./state/hook";
import {
  addUser,
  removeUser,
  setIsValidTeam,
  setLoading,
  setSubDomain,
} from "./state/slices/authSlice";

import LoadingPage from "@/components/custom/LoadingPage";
import TeamNotFound from "@/components/custom/TeamNotFound";
import Auth from "./Auth";
// import NotFoundPage from "./pages/NotFoundPage";

const DashboardPage = lazy(
  () => import("./pages/subDomainAdmin/DashboardPage")
); //admin main page
const TeamPage = lazy(() => import("./pages/subDomainAdmin/TeamPage")); //admin main page
const TeamSettingsPage = lazy(
  () => import("./pages/subDomainAdmin/TeamSettingsPage")
); //admin main page

const LandingPage = lazy(() => import("./pages/mainDomain/LandingPage"));
const CreateTeamPage = lazy(() => import("./pages/mainDomain/CreateTeamPage"));

const LoginPage = lazy(() => import("./pages/subDomain/LoginPage"));
const SignupPage = lazy(() => import("./pages/subDomain/SignupPage"));
const PublicBlogPage = lazy(() => import("./pages/subDomain/PublicBlogPage"));
const ResetPasswordPage = lazy(
  () => import("./pages/subDomain/ResetPasswordPage")
);
const JoinPage = lazy(() => import("./pages/subDomain/JoinPage"));
const PublicPostEditorPage = lazy(
  () => import("./pages/subDomain/PublicPostEditorPage")
);
const PublicPostViewPage = lazy(
  () => import("./pages/subDomain/PublicPostViewPageProps")
);

const RouteNotFound = lazy(() => import("./pages/notfound/RouteNotFound"));

const UserMyPostsPage = lazy(() => import("./pages/subDomain/UserMyPostsPage"));
const UserBookmarksPage = lazy(
  () => import("./pages/subDomain/UserBookmarksPage")
);
const UserDraftsPage = lazy(() => import("./pages/subDomain/UserDraftsPage"));

function App() {
  const dispatch = useAppDispatch();
  const loadingState = useAppSelector((state) => state.auth.isLoading);
  const subDomain = useAppSelector((state) => state.auth.subDomain);
  const isValidTeam = useAppSelector((state) => state.auth.isValidTeam);
  const user = useAppSelector((state) => state.auth.user);

  const adminRoutes = [
    { path: "dashboard", element: <DashboardPage /> },
    { path: "team", element: <TeamPage /> },
    { path: "settings", element: <TeamSettingsPage /> },
  ];
  const subDomainAuthRoutes = [
    {
      path: "login",
      element: (
        <Auth user={user} onlyPublic redirect="/">
          <LoginPage />
        </Auth>
      ),
    },
    {
      path: "signup",
      element: (
        <Auth user={user} onlyPublic redirect="/">
          <SignupPage />
        </Auth>
      ),
    },
    {
      path: "forgot-password",
      element: (
        <Auth user={user} onlyPublic redirect="/">
          <ResetPasswordPage />
        </Auth>
      ),
    },
    {
      path: "join",
      element: (
        <Auth user={user} onlyPublic redirect="/">
          <JoinPage />
        </Auth>
      ),
    },
  ];
  const subDomainPublicRoutes = [
    { path: "/", element: <PublicBlogPage /> },
    {
      path: "/blog/:slug",
      element: <PublicPostViewPage />,
    },
  ];

  const subDomainPrivateRoutes = [
    {
      path: "/write",
      element: (
        <Auth user={user}>
          <PublicPostEditorPage />
        </Auth>
      ),
    },
    {
      path: "/my-posts",
      element: (
        <Auth user={user}>
          <UserMyPostsPage />
        </Auth>
      ),
    },
    {
      path: "/bookmarks",
      element: (
        <Auth user={user}>
          <UserBookmarksPage />
        </Auth>
      ),
    },
    {
      path: "/drafts",
      element: (
        <Auth user={user}>
          <UserDraftsPage />
        </Auth>
      ),
    },
  ];

  const mainDomainPublicRoutes = [{ path: "/", element: <LandingPage /> }];
  const mainDomainAuthRoutes = [
    { path: "create-team", element: <CreateTeamPage /> },
  ];
  
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await dispatch(
          authApi.endpoints.fetchProfile.initiate()
        ).unwrap();
        dispatch(addUser(res?.data ?? null));
      } catch (error) {
        dispatch(removeUser());
        // console.error("Error fetching profile:", error);
      }
    };
    if (subDomain) {
      fetchProfile();
    }
  }, [subDomain]);

  useEffect(() => {
    const hostname = window.location.hostname;
    const parts = hostname.split(".");
    const baseDomain = "sunilspace.me";
    const isSubdomain = parts.length === 3 && hostname.endsWith(baseDomain);
    const detectedSubdomain = isSubdomain ? parts[0] : null;
    if (detectedSubdomain) {
      dispatch(setSubDomain(detectedSubdomain));
      fetch(
        `${
          import.meta.env.VITE_API_URL
        }/team/validate?subdomain=${detectedSubdomain}`
      )
        .then((res) => res.json())
        .then((data) => {
          dispatch(setIsValidTeam(data.exists));
        })
        .catch((err) => {
          console.error("Subdomain validation error:", err);
          dispatch(setIsValidTeam(false));
        })
        .finally(() => dispatch(setLoading(false)));
    } else {
      dispatch(setLoading(false));
    }
  }, []);

  if (loadingState) {
    return <LoadingPage />;
  }

  return (
    <BrowserRouter>
      {subDomain ? (
        isValidTeam ? (
          <Suspense fallback={<LoadingPage />}>
            <Routes>
              <Route path="/" element={<PublicLayout />}>
                {subDomainPublicRoutes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                  />
                ))}
                {subDomainPrivateRoutes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Route>

              <Route path="/" element={<AuthLayout />}>
                {/* login and join routes */}
                {subDomainAuthRoutes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Route>

              <Route path="/admin" element={<MainLayout />}>
                {adminRoutes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Route>

              <Route path="*" element={<RouteNotFound />} />
            </Routes>
          </Suspense>
        ) : (
          <Suspense fallback={<LoadingPage />}>
            <Routes>
              <Route path="*" element={<TeamNotFound />} />
            </Routes>
          </Suspense>
        )
      ) : (
        <Suspense fallback={<LoadingPage />}>
          <Routes>
            {mainDomainPublicRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
            <Route path="/" element={<AuthLayout />}>
              {mainDomainAuthRoutes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Route>
            <Route path="*" element={<RouteNotFound />} />
          </Routes>
        </Suspense>
      )}
    </BrowserRouter>
  );
}

export default App;
