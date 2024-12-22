import { useAuthContext } from "@/providers/AuthProvider";
import { isClub } from "@/services/auth";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { createClub } from "@/services/clubs";
import { useToast } from "@/hooks/use-toast";

const CreateClub = () => {
    const { user } = useAuthContext();
    const { toast } = useToast();

    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [members, setMembers] = useState(0);
    const [numb, setNumb] = useState("");
    const [email, setEmail] = useState("");
    const [accolades, setAccolades] = useState("");
    const [dept, setDept] = useState("");
    const [tags, setTags] = useState<string[]>([]);

    const { data, isLoading, isError } = useQuery({
        queryKey: [`isclub=${user}`],
        queryFn: async () => await isClub(user as string),
    });

    const handleClubCreate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await createClub(
            name,
            desc,
            members,
            accolades,
            numb,
            email,
            dept,
            tags
        );

        toast({
            title: "Club created!",
        });
    };

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {isError && (
                <p className="text-red-600">Error occured. Reload Page.</p>
            )}
            {data && (
                <div>
                    <h4 className="text-2xl font-bold">Create a club:</h4>
                    <form
                        className="flex flex-col gap-3 mt-5 items-start justify-center w-[500px]"
                        onSubmit={handleClubCreate}
                    >
                        <Label htmlFor="name">Username</Label>
                        <Input
                            id="name"
                            name="name"
                            type="text"
                            value={name}
                            required
                            onChange={(e) => setName(e.target.value)}
                        />

                        <Label htmlFor="desc">Description</Label>
                        <Input
                            id="desc"
                            name="desc"
                            type="text"
                            value={desc}
                            required
                            onChange={(e) => setDesc(e.target.value)}
                        />

                        <Label htmlFor="members">Members</Label>
                        <Input
                            id="members"
                            name="members"
                            type="number"
                            value={members}
                            required
                            onChange={(e) => setMembers(Number(e.target.value))}
                        />

                        <Label htmlFor="number">Contact Number</Label>
                        <Input
                            id="number"
                            name="number"
                            type="text"
                            value={numb}
                            required
                            onChange={(e) => setNumb(e.target.value)}
                        />

                        <Label htmlFor="email">Contact Email</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <Label htmlFor="accs">Accolades</Label>
                        <Input
                            id="accs"
                            name="accs"
                            type="text"
                            value={accolades}
                            required
                            onChange={(e) => setAccolades(e.target.value)}
                        />

                        <Label htmlFor="accs">Deptartment</Label>
                        <Input
                            id="dept"
                            name="dept"
                            type="text"
                            value={dept}
                            required
                            onChange={(e) => setDept(e.target.value)}
                        />

                        <Label htmlFor="tags">Tags separated by commas</Label>
                        <Input
                            id="tags"
                            name="tags"
                            type="text"
                            placeholder="Comma-separated tags"
                            value={tags.join(", ")}
                            required
                            onChange={(e) =>
                                setTags(
                                    e.target.value
                                        .split(",")
                                        .map((tag) => tag.trim())
                                )
                            }
                        />

                        <Button type="submit" className="w-full">
                            Create
                        </Button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default CreateClub;
