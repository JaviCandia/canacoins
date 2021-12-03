export interface User {
    id?: string,
    email: string,
    password: string,
    displayName: string,
    createdAt?: string,
    lastLogin?: string,
    address?: string,
    role: 'reciclador' | 'repartidor',
    cash?: number,
    collector_type?: string,   
}