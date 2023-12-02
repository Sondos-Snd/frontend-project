import { RolesEnum } from './roles-enum';

export interface UserModel {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    pwd: string;
    roles: [RolesEnum];
}
