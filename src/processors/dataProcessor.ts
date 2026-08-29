import { displayName } from "../utils/stringUtils";

export interface ProcessedUser {
  id: number;
  displayName: string;
}

export function processUser(id: number, name: string): ProcessedUser {
  return {
    id,
    displayName: displayName(name),
  };
}