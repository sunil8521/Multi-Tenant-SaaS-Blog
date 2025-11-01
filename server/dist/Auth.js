import { jsx as _jsx } from "react/jsx-runtime";
import { Navigate, Outlet } from "react-router-dom";
import { ReactNode } from "react";
const Auth = ({ user, redirect = "/login", onlyPublic = false, children, }) => {
    // If route is private & no user → redirect
    if (!onlyPublic && !user)
        return _jsx(Navigate, { to: redirect, replace: true });
    // If route is only for guests & user exists → redirect
    if (onlyPublic && user)
        return _jsx(Navigate, { to: redirect, replace: true });
    return children ? children : _jsx(Outlet, {});
};
export default Auth;
//# sourceMappingURL=Auth.js.map