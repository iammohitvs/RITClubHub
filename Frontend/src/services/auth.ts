import api from "@/lib/axiosInstance";
import { handleAxiosError } from "@/lib/utils";

export const signup = async (
    username: string,
    password: string,
    type: string
) => {
    try {
        const response = await api.post("/register", {
            name: username,
            password,
            type,
        });

        try {
            const res2 = await api.post("/login", { name: username, password });

            api.defaults.headers["Authorization"] = `Bearer ${res2.data.token}`;
            return {
                success: true,
                user: res2.data.name,
            };
        } catch (error) {
            handleAxiosError(error);

            throw new Error();
        }
    } catch (error) {
        //@ts-expect-error
        if (error.response.data === "Username already exists.") {
            return {
                success: false,
                message: "Username already exists",
            };
        }

        handleAxiosError(error);

        throw new Error();
    }
};

export const login = async (username: string, password: string) => {
    try {
        const res2 = await api.post("/login", { name: username, password });

        api.defaults.headers["Authorization"] = `Bearer ${res2.data.token}`;
        return {
            success: true,
            user: res2.data.name,
        };
    } catch (error) {
        handleAxiosError(error);

        throw new Error();
    }
};

export const logout = async () => {
    api.defaults.headers["Authorization"] = "Bearer ";
    return { success: true };
};
