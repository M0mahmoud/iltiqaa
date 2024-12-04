"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Sidebar() {
    const pathname = usePathname();

    const navigation = [
        {
            name: "My Account",
            href: "/account",
        },
        {
            name: "My Units",
            href: "/",
        },
        {
            name: "My Reservations",
            href: "/reservations",
        },
    ];
    return (
        <div className="w-full md:max-w-64 md:min-h-screen ">
            <nav className="flex md:flex-col p-4 gap-2 w-full">
                {navigation.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "group flex items-center px-2 md:px-4 py-2 text-sm md:text-base font-medium rounded-lg transition-colors relative bg-[#F2F3F4] text-primary overflow-hidden ",
                                isActive ? "border-primary border" : ""
                            )}
                        >
                            <span
                                className={cn(
                                    "w-2 h-2 rounded-full bg-primary  transition-all -translate-x-[300%] group-hover:translate-x-0",
                                    isActive
                                        ? "translate-x-0 border-primary"
                                        : ""
                                )}
                            />
                            <span className="ps-3">{item.name}</span>
                            {isActive && <div className=" bg-blue-600" />}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}
