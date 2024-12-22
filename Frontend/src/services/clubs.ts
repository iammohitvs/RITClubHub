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

export const createClub = async (
    name: string,
    desc: string,
    members: number,
    accolades: string,
    cnumber: string,
    cemail: string,
    dept: string,
    tags: string[]
) => {
    try {
        const response = await api.post(`/addclub`, {
            name,
            desc,
            members,
            accolades,
            cnumber,
            cemail,
            ratings: 0,
            dept,
            tags,
        });

        return response.data;
    } catch (error) {
        handleAxiosError(error);

        throw new Error();
    }
};
