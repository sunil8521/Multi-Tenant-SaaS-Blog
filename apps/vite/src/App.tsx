import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";


import AuthLayout from "./layouts/AuthLayout";
import PublicLayout from "./layouts/PublicLayout";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignupPage = lazy(() => import("./pages/SignupPage"));
const PublicBlogPage = lazy(() => import("./pages/PublicBlogPage"));
const CreateTeamPage = lazy(() => import("./pages/CreateTeamPage"));
const ResetPasswordPage = lazy(() => import("./pages/ResetPasswordPage"));
const JoinPage = lazy(() => import("./pages/JoinPage"));


const authRoutes = [
  { path: "login", element: <LoginPage /> },
  { path: "signup", element: <SignupPage /> },
  { path: "create-team", element: <CreateTeamPage /> },
  { path: "forgot-password", element: <ResetPasswordPage /> },
  { path: "join", element: <JoinPage /> },

];
const publicSubdomainRoutes = [
  { path: "/blog", element: <PublicBlogPage /> },
]


function App() {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/create-team" element={<CreateTeamPage />} /> */}

          <Route path="/" element={<AuthLayout />}>
            {authRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Route>

          <Route path="/" element={<PublicLayout />}>
            {publicSubdomainRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Route>

        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
