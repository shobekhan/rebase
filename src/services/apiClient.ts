import { log } from "../utils/logger";

export function get(url: string) {
  log("GET " + url);
  return Promise.resolve({ data: "ok" });
}