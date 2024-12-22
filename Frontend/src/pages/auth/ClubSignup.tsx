import api from "@/lib/axiosInstance";
import { signup } from "@/services/auth";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router";
import { useAuthContext } from "@/providers/AuthProvider";
import { Button } from "@/components/ui/button";

const ClubSignup = () => {
    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");
    const { toast } = useToast();
    const navigate = useNavigate();
    const { setUser } = useAuthContext();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const response = await signup(username, pass, "club");
        if (response.success) {
            toast({
                title: "Success!",
            });
            setUser(response.user);
            navigate("/profile");
        } else {
            toast({
                title: "Something went wrong!",
                variant: "destructive",
            });
        }
    };

    return (
        <section>
            <h1 className="text-3xl font-extrabold w-fit mx-auto mb-10">
                Club Sign Up
            </h1>

            <form
                className="flex flex-col gap-5 max-w-[500px] mx-auto py-20"
                onSubmit={handleSubmit}
            >
                <Label htmlFor="username">Username</Label>
                <Input
                    id="username"
                    name="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Label htmlFor="pass">Password</Label>
                <Input
                    id="pass"
                    name="pass"
                    type="text"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                />
                <Button type="submit">Sign up</Button>
            </form>
        </section>
    );
};

export default ClubSignup;
