import { formatName } from "../utils/formatter";

export function processUsers(users: string[]): string[] {
    return users.map(formatName);
}