import { useAuthContext } from "@/providers/AuthProvider";
import { Outlet, Navigate } from "react-router";

const AuthChecker = () => {
    const { user } = useAuthContext();

    if (!user) return <Navigate to="/auth" />;
    else return <Outlet />;
};

export default AuthChecker;
