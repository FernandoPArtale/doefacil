import { Organization } from "./Organization";

export type Cause = {
    id: number;
    name: string;
    description: string;
    created_at?: string;
    active: boolean;
    helper_organization_count?: number
}