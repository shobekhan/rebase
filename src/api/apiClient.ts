import { log } from "../utils/legacyLogger";

export interface ApiResponse {
  id: number;
  name: string;
}

export async function fetchUser(): Promise<ApiResponse> {
  log("Fetching user");

  return {
    id: 1,
    name: "john doe",
  };
}