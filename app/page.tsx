import Sidebar from "./components/Sidebar";
import UnitsList from "./components/Units/UnitsList";
import { MOCK_PROPERTIES } from "./data";

export default function Home({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-1 flex-col lg:flex-row lg:mt-5 w-full mx-auto max-w-7xl p-4 sm:px-6 lg:px-8 gap-4">
            <Sidebar />
            <main className="flex-1">
                {/* {children} */}
                <div className="container mx-auto">
                    <UnitsList units={MOCK_PROPERTIES} />
                </div>
            </main>
        </div>
    );
}
