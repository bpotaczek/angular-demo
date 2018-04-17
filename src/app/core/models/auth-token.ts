import { User } from './user';

export interface AuthToken {
    Token: string;
    Expires: Date;
    UserModel: User;
}
