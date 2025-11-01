import { Navigate, Outlet } from "react-router-dom";
import  type{ ReactNode } from "react";
import  type{ User } from "./state/slices/authSlice";

interface AuthProps {
  user: User | null;
  redirect?: string;
  onlyPublic?: boolean;
  children?: ReactNode;
}

const Auth: React.FC<AuthProps> = ({
  user,
  redirect = "/login",
  onlyPublic = false,
  children,
}) => {
  // If route is private & no user → redirect
  if (!onlyPublic && !user) return <Navigate to={redirect} replace />;

  // If route is only for guests & user exists → redirect
  if (onlyPublic && user) return <Navigate to={redirect} replace />;

  return children ? children : <Outlet />;
};

export default Auth;
