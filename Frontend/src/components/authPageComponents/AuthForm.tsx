import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useAuthContext } from "@/contextsAndProviders/AuthContextProvider";
import { login, signup } from "@/lib/services/auth";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";

const SignupForm = () => {
    const { setUser } = useAuthContext();
    const { toast } = useToast();
    const navigate = useNavigate();

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPass, setConfirmPass] = useState<string>("");

    const [isChecked, setIsChecked] = useState(false);
    const [isConfChecked, setIsConfChecked] = useState(false);

    const { mutate, isPending } = useMutation({
        mutationKey: ["signup"],
        mutationFn: async () => {
            const res = await signup(username, password);

            if (res.message) {
                toast({
                    variant: "destructive",
                    title: res.message as string,
                });
            } else {
                const res2 = await login(username, password);

                setUser(res2.data);
                toast({
                    description: "Signup successful!",
                });
                navigate("/valid/workspace");
            }
        },
        onError: () => {
            toast({
                variant: "destructive",
                title: "Some error occured. Try again soon",
            });
        },
    });

    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        mutate();
    };

    return (
        <form className="flex flex-col gap-4 py-6" onSubmit={onFormSubmit}>
            <Label htmlFor="username">Username</Label>
            <Input
                name="username"
                id="username"
                required
                type="text"
                minLength={8}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border-white border-opacity-50"
            />

            <Label htmlFor="password">Password</Label>
            <Input
                name="password"
                id="password"
                required
                type={isChecked ? "text" : "password"}
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-white border-opacity-50"
            />

            <Label htmlFor="password">Confirm Password</Label>
            <Input
                name="password"
                id="password"
                required
                type={isConfChecked ? "text" : "password"}
                minLength={8}
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
                className="border-white border-opacity-50"
            />

            <div className="flex flex-row-reverse gap-2 justify-end items-center">
                <Label htmlFor="showpass">Show Password</Label>
                <Checkbox
                    id="showpass"
                    onClick={() => setIsChecked(!isChecked)}
                />
            </div>

            <div className="flex flex-row-reverse gap-2 justify-end items-center">
                <Label htmlFor="showconfpass">Show Confirm Password</Label>
                <Checkbox
                    id="showconfpass"
                    onClick={() => setIsConfChecked(!isConfChecked)}
                />
            </div>

            <Button className="w-full" type="submit" disabled={isPending}>
                {isPending ? "Logging in..." : "Log In"}
            </Button>
        </form>
    );
};

export default SignupForm;
