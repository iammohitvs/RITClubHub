import api from "@/lib/axiosInstance";
import { ClubType, EventType } from "@/lib/types";
import { handleAxiosError } from "@/lib/utils";

export const getAllClubs = async (): Promise<ClubType[]> => {
    try {
        const response = await api.get("/clubs");

        return response.data;
    } catch (error) {
        handleAxiosError(error);

        throw new Error();
    }
};

export const getSpeceficClub = async (clubid: string): Promise<ClubType> => {
    try {
        const response = await api.get(`/clubs/club/${clubid}`);

        return response.data;
    } catch (error) {
        handleAxiosError(error);

        throw new Error();
    }
};
