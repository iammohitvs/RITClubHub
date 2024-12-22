import api from "@/lib/axiosInstance";
import { EventType } from "@/lib/types";
import { handleAxiosError } from "@/lib/utils";

export const getUpcomingEvents = async (): Promise<EventType[]> => {
    try {
        const response = await api.get("/events/future");

        return response.data;
    } catch (error) {
        handleAxiosError(error);

        throw new Error();
    }
};
