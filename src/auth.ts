import { User } from "./user";

export function login(user: User): string {
    return `Welcome ${user.username}`;
}