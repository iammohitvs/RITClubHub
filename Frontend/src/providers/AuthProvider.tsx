import React, { useState } from "react";
import { useContext, createContext } from "react";

export const AuthContext = createContext<{
    user: string | null;
    setUser: React.Dispatch<React.SetStateAction<string | null>>;
} | null>(null);

export const AuthContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [user, setUser] = useState<string | null>(null);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const auth = useContext(AuthContext);

    if (!auth)
        throw new Error("Auth context must be used within the auth provider!");

    if (!auth.user) return { user: null, setUser: auth.setUser };

    return auth;
};
