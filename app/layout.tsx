import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Madmon Real Estate",
    description: "Manage your real estate units",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${poppins.style} antialiased`}>
                <main className="flex flex-col min-h-screen">
                    <Header />
                    <div>{children}</div>
                    <Footer />
                </main>
            </body>
        </html>
    );
}
