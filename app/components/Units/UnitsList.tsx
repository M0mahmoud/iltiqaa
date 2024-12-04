"use client";

import { filterUnits, sortUnits } from "@/lib/utils";
import { SortOrder, StatusType, Unit } from "@/types/unit";
import React, { useState } from "react";
import Pagination from "../Pagination";
import { Button } from "../ui/button";
import FilterSortButtons from "./FilterSortButtons";
import UnitCard from "./UnitCard";

const ITEMS_PER_PAGE = 5;

export default function UnitsList({ units }: { units: Unit[] }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [dateSort, setDateSort] = useState<SortOrder>("desc");
    const [priceSort, setPriceSort] = useState<SortOrder>("desc");
    const [statusFilter, setStatusFilter] = useState<StatusType>("all");

    // Filter Units
    const filteredUnits = filterUnits(units, statusFilter);
    const sortedUnits = sortUnits(filteredUnits, dateSort, priceSort);

    const totalPages = Math.ceil(sortedUnits.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const visibleUnits = sortedUnits.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    );

    const handleDelete = (id: string) => {
        // Implement delete functionality
        console.log("Delete property:", id);
    };

    const toggleSort = (type: "date" | "price") => {
        if (type === "date") {
            setDateSort((prev) => (prev === "asc" ? "desc" : "asc"));
            setPriceSort("desc"); // Reset price
        } else {
            setPriceSort((prev) => (prev === "asc" ? "desc" : "asc"));
            setDateSort("desc"); // Reset date
        }
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold text-gray-900">
                    My Units
                </h1>
                <div className="flex items-center gap-2 text-white">
                    <FilterSortButtons
                        setStatusFilter={setStatusFilter}
                        toggleSort={toggleSort}
                    />
                    <Button className="bg-[#6666FF] px-6">+ Add Unit</Button>
                </div>
            </div>

            <div className="space-y-4">
                {visibleUnits.map((unit) => (
                    <UnitCard
                        key={unit.id}
                        unit={unit}
                        onDelete={handleDelete}
                    />
                ))}
            </div>

            <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">
                    Showing {units.length} Units
                </p>
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    );
}
