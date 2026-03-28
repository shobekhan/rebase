import { User } from "./types";

export function login(user: User, password: string): boolean {
  return user.password === password;
}