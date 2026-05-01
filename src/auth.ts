import { User } from "./user";

export function login(user: User): string {
    return `User ${user.name} logged in`;
}