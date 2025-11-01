import { ReactNode } from "react";
interface AuthProps {
    user: any | null;
    redirect?: string;
    onlyPublic?: boolean;
    children?: ReactNode;
}
declare const Auth: React.FC<AuthProps>;
export default Auth;
//# sourceMappingURL=Auth.d.ts.map