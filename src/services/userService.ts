import { User } from "../models/user";
import { log } from "../utils/logger";

export function createUser(user: User) {
  log("Creating user " + user.name);
  return user;
}