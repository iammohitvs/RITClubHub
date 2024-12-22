import { Button } from "@/components/ui/button";
import { logout } from "@/services/auth";
import React from "react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router";
import { useAuthContext } from "@/providers/AuthProvider";
import { LogOut } from "lucide-react";

const UserProfilePage = () => {
    const { toast } = useToast();
    const navigate = useNavigate();
    const { user, setUser } = useAuthContext();

    const handleLogout = async () => {
        const response = await logout();
        if (response.success) {
            toast({
                title: "Success!",
            });
            setUser(null);
            navigate("/");
        } else {
            toast({
                title: "Something went wrong!",
                variant: "destructive",
            });
        }
    };

    return (
        <section className="flex flex-col gap-5 items-center justify-center py-20">
            <h3 className="text-3xl font-bold">Your username: {user}</h3>
            <Button
                className="mx-auto"
                variant="secondary"
                onClick={handleLogout}
            >
                Logout <LogOut />
            </Button>
        </section>
    );
};

export default UserProfilePage;
