export type User = {
    id: number;
    username: string;
    email: string;
    name: string;
    address: string;
    document: string;
    type_document: string;
    birth_date: string;
    description?: string;
    updated_at: string;
    photo?: string;
    created_at: string;
    active: boolean;
}