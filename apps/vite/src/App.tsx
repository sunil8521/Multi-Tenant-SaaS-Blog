import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import {useAppDispatch,useAppSelector} from "./state/hook";
import {useFetchProfileQuery}from "./state/api/userApi"
import {addUser,removeUser,setIsValidTeam,setLoading,setSubDomain} from "./state/slices/authSlice"


import AuthLayout from "./layouts/AuthLayout";
import PublicLayout from "./layouts/PublicLayout";
import LoadingPage from "@repo/ui/components/custom/LoadingPage";
import TeamNotFound from "@repo/ui/components/custom/TeamNotFound";
// import NotFoundPage from "./pages/NotFoundPage";

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

function App() {
  const dispatch=useAppDispatch();
  const loadingState=useAppSelector((state)=>state.auth.isLoading);
  const subDomain=useAppSelector((state)=>state.auth.subDomain);
  const isValidTeam=useAppSelector((state)=>state.auth.isValidTeam);


  const subDomainAuthRoutes = [
    { path: "login", element: <LoginPage /> },
    { path: "signup", element: <SignupPage /> },
    { path: "forgot-password", element: <ResetPasswordPage /> },
    { path: "join", element: <JoinPage /> },
  ];
  const subDomainPublicRoutes = [{ path: "/", element: <PublicBlogPage /> }];

  const subDomainPrivateRoutes = [
    { path: "/write", element: <PublicPostEditorPage /> },

    { path: "/blog/:slug", element: <PublicPostViewPage /> },
  ];

  const mainDomainPublicRoutes = [{ path: "/", element: <LandingPage /> }];
  const mainDomainAuthRoutes = [
    { path: "create-team", element: <CreateTeamPage /> },
  ];
  const { data: userProfile } = useFetchProfileQuery();
  console.log("User Profile:", userProfile);

  useEffect(() => {


    const hostname = window.location.hostname;
    const parts = hostname.split(".");
    const baseDomain = "blogapp.tech";
    const isSubdomain = parts.length === 3 && hostname.endsWith(baseDomain);
    const detectedSubdomain = isSubdomain ? parts[0] : null;
    if (detectedSubdomain) {
      dispatch(setSubDomain(detectedSubdomain));
      fetch(
        `${import.meta.env.VITE_API_URL}/team/validate?subdomain=${detectedSubdomain}`
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
    } 
  }, []);

  if (loadingState) {
    return <LoadingPage />;
  }

  return (
    <Suspense fallback={<LoadingPage />}>
      <BrowserRouter>
        {subDomain ? (
          isValidTeam ? (
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
                {subDomainAuthRoutes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Route>
              <Route path="*" element={<RouteNotFound />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="*" element={<TeamNotFound />} />
            </Routes>
          )
        ) : (
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
        )}
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
