import { users } from "../data/users";

export function getUserName(id: number): string {
  const user = users.find(u => u.id === id);
  return user ? user.name : "Unknown";
}