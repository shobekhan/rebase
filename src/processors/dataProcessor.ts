import { formatLabel } from "../utils/stringUtils";

export interface ProcessedUser {
  id: number;
  label: string;
}

export function processUser(id: number, name: string): ProcessedUser {
  return {
    id,
    label: formatLabel(name),
  };
}