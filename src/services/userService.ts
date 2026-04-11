import { User } from "../models/user";

export function getDisplayName(user: User): string {
  return user.name;
}

export function isUserActive(user: User): boolean {
  return user.isActive;
}