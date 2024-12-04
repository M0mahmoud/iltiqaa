import { cn } from "@/lib/utils";
import type { UnitStatus } from "@/types/unit";

export function UnitStatus({ status }: { status: UnitStatus }) {
    return (
        <span
            className={cn(
                "inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium capitalize text-white",
                {
                    "bg-green-500": status === "approved",
                    "bg-blue-500": status === "pending",
                    "bg-red-500": status === "rejected",
                }
            )}
        >
            {status}
        </span>
    );
}
