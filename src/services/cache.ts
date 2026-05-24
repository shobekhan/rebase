import { User } from "./api";

const cache = new Map<string, User>();

export function cacheUser(user: User): void {
  cache.set(user.id, user);
}