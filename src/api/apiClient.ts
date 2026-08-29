import { log } from "../utils/legacyLogger";

export interface ApiResponse {
  id: number;
  name: string;
  active: boolean;
}

export async function fetchUser(): Promise<ApiResponse> {
  log("Fetching active user");

  return {
    id: 1,
    name: "john doe",
    active: true,
  };
}