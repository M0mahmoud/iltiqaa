import Sidebar from "./components/Sidebar";

export default function Home({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-1 flex-col md:flex-row md:mt-5 w-full mx-auto max-w-7xl p-4 sm:px-6 lg:px-8">
            <Sidebar />
            <main className="flex-1 p-6">{children}</main>
        </div>
    );
}
