"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { StatusType } from "@/types/unit";
import { ArrowDownUp, Filter } from "lucide-react";
import { Button } from "../ui/button";

interface FilterSortButtonsProps {
    setStatusFilter: (status: StatusType) => void;
    toggleSort: (type: "date" | "price") => void;
}

export default function FilterSortButtons({
    setStatusFilter,
    toggleSort,
}: FilterSortButtonsProps) {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="bg-[#6666FF]"
                    >
                        <Filter />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="flex flex-col gap-2">
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>Status</DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem
                                    onClick={() => setStatusFilter("all")}
                                >
                                    All
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() => setStatusFilter("approved")}
                                >
                                    Approved
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() => setStatusFilter("pending")}
                                >
                                    Pending
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() => setStatusFilter("rejected")}
                                >
                                    Rejected
                                </DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuItem disabled>Reserved</DropdownMenuItem>
                    <DropdownMenuItem disabled>Deleted</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="bg-[#6666FF]"
                    >
                        <ArrowDownUp />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="flex flex-col gap-2">
                    <DropdownMenuItem onClick={() => toggleSort("date")}>
                        Date
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => toggleSort("price")}>
                        Price
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}
