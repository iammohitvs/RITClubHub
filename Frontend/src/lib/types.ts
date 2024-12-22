export type EventType = {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    ratings: number | null;
    desc: string;
    prize: string | null;
    location: string;
    date: Date;
    clubId: number | null;
};

export type ClubType = {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    ratings: number | null;
    tags: string[];
    desc: string;
    members: number;
    accolades: string | null;
    cnumber: string;
    cemail: string;
    dept: string | null;
};

export type RegisterType = {
    id: string;
    name: string;
    type: string;
};

export type LoginType = {
    token: string;
};
