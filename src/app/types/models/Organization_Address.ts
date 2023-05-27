export type Organization_Address = {
    id: number;
    organization_id: number;
    name: string;
    street_address: string;
    address_number: string;
    neighborhood: string;
    city: string;
    state_acronym: string;
    postal_code: string;
    coordinate: any;
    created_at: string;
    active: boolean;
}