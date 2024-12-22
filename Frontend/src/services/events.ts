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

export const getCompletedEvents = async (): Promise<EventType[]> => {
    try {
        const response = await api.get("/events/past");

        return response.data;
    } catch (error) {
        handleAxiosError(error);

        throw new Error();
    }
};

export const getEventsByMonth = async (
    month: number,
    year: number
): Promise<EventType[]> => {
    try {
        const response = await api.get(`/events/calendar?m=${month}&y=${year}`);

        return response.data;
    } catch (error) {
        handleAxiosError(error);

        throw new Error();
    }
};

export const getSpeceficEvent = async (eid: string): Promise<EventType> => {
    try {
        const response = await api.get(`/events/event/${eid}`);

        return response.data;
    } catch (error) {
        handleAxiosError(error);

        throw new Error();
    }
};
