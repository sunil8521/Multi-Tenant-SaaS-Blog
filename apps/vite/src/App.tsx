import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";

import AuthLayout from "./layouts/AuthLayout";
import PublicLayout from "./layouts/PublicLayout";
import LoadingPage from "@repo/ui/components/custom/LoadingPage";
import TeamNotFound from "@repo/ui/components/custom/TeamNotFound";
// import NotFoundPage from "./pages/NotFoundPage";

const LandingPage = lazy(() => import("./pages/mainDomain/LandingPage"));
const LoginPage = lazy(() => import("./pages/subDomain/LoginPage"));
const SignupPage = lazy(() => import("./pages/subDomain/SignupPage"));
const PublicBlogPage = lazy(() => import("./pages/subDomain/PublicBlogPage"));
const CreateTeamPage = lazy(() => import("./pages/mainDomain/CreateTeamPage"));
const ResetPasswordPage = lazy(() => import("./pages/subDomain/ResetPasswordPage"));
const JoinPage = lazy(() => import("./pages/subDomain/JoinPage"));
const RouteNotFound = lazy(() => import("./pages/notfound/RouteNotFound"));

function App() {
  const [subdomain, setSubdomain] = useState<string | null>(null);
  const [isValidTeam, setIsValidTeam] = useState(false);
  const [loading, setLoading] = useState(true);

  const subDomainAuthRoutes = [
    { path: "login", element: <LoginPage /> },
    { path: "signup", element: <SignupPage /> },
    { path: "forgot-password", element: <ResetPasswordPage /> },
    { path: "join", element: <JoinPage /> },
  ];
  const subDomainPublicRoutes = [{ path: "/", element: <PublicBlogPage /> }];

  const mainDomainPublicRoutes = [{ path: "/", element: <LandingPage /> }];
  const mainDomainAuthRoutes = [
    { path: "create-team", element: <CreateTeamPage /> },
  ];

  useEffect(() => {
    const hostname = window.location.hostname;
    const parts = hostname.split(".");
    const baseDomain = "blogapp.tech";

    const isSubdomain = parts.length === 3 && hostname.endsWith(baseDomain);
    const detectedSubdomain = isSubdomain ? parts[0] : null;
    setSubdomain(detectedSubdomain);
    if (detectedSubdomain) {
      fetch(
        `${import.meta.env.VITE_API_URL}/team/validate?subdomain=${detectedSubdomain}`
      )
        .then((res) => res.json())
        .then((data) => {
          setIsValidTeam(data.exists);
        })
        .catch((err) => {
          console.error("Subdomain validation error:", err);
          setIsValidTeam(false);
        })
        .finally(() => setLoading(false));
    } else {
      setSubdomain(null);
      setIsValidTeam(false);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <Suspense fallback={<LoadingPage />}>
      <BrowserRouter>
        {subdomain ? (
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
