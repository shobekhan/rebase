import { User } from "./types";
import { compareHash } from "./utils";

export async function login(user: User, password: string): Promise<boolean> {
  return compareHash(password, user.hashedPassword);
}