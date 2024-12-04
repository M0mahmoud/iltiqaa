export type UnitStatus = "approved" | "pending" | "rejected";

export interface Unit {
    id: string;
    title: string;
    location: string;
    price: number;
    rooms: number;
    bathrooms: number;
    area: number;
    image: string;
    status: UnitStatus;
    reserved?: boolean;
    addedDate: string;
    assignedTo?: string;
}
export type SortOrder = "asc" | "desc";
export type StatusType = "all" | UnitStatus;
