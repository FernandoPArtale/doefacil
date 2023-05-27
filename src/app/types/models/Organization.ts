import { Cause } from "./Cause";
import { Organization_Address } from "./Organization_Address";
import { Organization_Contact } from "./Organization_Contact";

export type Organization = {
    id: number;
    business_name: string;
    trading_name: string;
    document?: string;
    description: string;
    incorpotation_date?: string;
    updated_at?: string;
    created_at?: string;
    active?: boolean;
    causes?: Cause[];
    addresses?: Organization_Address[];
    contacts?: Organization_Contact[];
}