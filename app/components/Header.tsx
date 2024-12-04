"use client";
import { ChevronDown, Globe, Heart, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeMenu = () => setIsMenuOpen(false);
    return (
        <header className="bg-white shadow-sm">
            <div className="mx-auto max-w-7xl p-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href={"/"} className="flex-shrink-0">
                            <Image
                                src="/logo.png"
                                alt="Madmon LOGO"
                                width={120}
                                height={120}
                            />
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-primary z-50 relative"
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center gap-5">
                        <NavItems closeMenu={closeMenu} />
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
                    isMenuOpen ? "translate-x-0" : "translate-x-full"
                } md:hidden`}
            >
                <div className="flex flex-col justify-center items-center h-full">
                    <NavItems closeMenu={closeMenu} />
                </div>
            </div>
        </header>
    );
}

function NavItems({ closeMenu }: { closeMenu: () => void }) {
    return (
        <>
            <Link href="/" className="text-primary text-xl block py-2 md:py-0">
                Home
            </Link>
            <Link href="/" className="text-primary text-xl block py-2 md:py-0">
                About
            </Link>
            <Link href="/" className="text-primary text-xl block py-2 md:py-0">
                Contact
            </Link>
            <div className="relative py-2 md:py-0">
                <button
                    className="flex items-center text-xl font-medium text-primary"
                    onClick={closeMenu}
                >
                    <Heart className="h-5 w-5 text-primary" />
                    <span className="ms-1">Favourite</span>
                </button>
            </div>
            <div className="relative py-2 md:py-0">
                <button
                    className="flex items-center text-xl font-medium text-primary"
                    onClick={closeMenu}
                >
                    <Globe className="h-5 w-5 text-primary" />
                    <span className="ms-1">EN</span>
                </button>
            </div>
            <div className="flex items-center py-2 md:py-0" onClick={closeMenu}>
                <Image
                    className="h-8 w-8 rounded-full"
                    src="/user.png"
                    alt="User avatar"
                    width={32}
                    height={32}
                />
                <span className="ml-2 font-medium text-gray-700">
                    Omar Mohamed
                </span>
                <ChevronDown />
            </div>
        </>
    );
}
