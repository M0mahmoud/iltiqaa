import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    setCurrentPage: (page: number) => void;
}

export default function Pagination({
    currentPage,
    totalPages,
    setCurrentPage,
}: PaginationProps) {
    const maxVisibleButtons = 3;
    return (
        <div className="flex items-center gap-2">
            <Button
                variant="outline"
                size="icon"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
            >
                <ChevronLeft className="size-4" />
            </Button>
            {Array.from({
                length: Math.min(maxVisibleButtons, totalPages),
            }).map((_, i) => (
                <Button
                    key={i}
                    variant={currentPage === i + 1 ? "default" : "outline"}
                    size="icon"
                    onClick={() => setCurrentPage(i + 1)}
                    aria-label={`Page ${i + 1}`}
                    aria-current={currentPage === i + 1 ? "page" : undefined}
                >
                    {i + 1}
                </Button>
            ))}
            <Button
                variant="outline"
                size="icon"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
            >
                <ChevronRight className="size-4" />
            </Button>
        </div>
    );
}
