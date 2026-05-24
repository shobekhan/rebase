import { log } from "../utils/logger";

export function createUser(name: string) {
  log("creating user");
  return { name };
}