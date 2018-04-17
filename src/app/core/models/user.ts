import { AuthToken } from './auth-token';

export interface User {
    Username: string;
    FirstName?: string;
    LastName?: string;
    HoldingCompanyId?: number;
}
