import { fetchUser } from "./api/apiClient";
import { processUser } from "./processors/dataProcessor";
import { log } from "./utils/legacyLogger";

async function main(): Promise<void> {
  log("Application started");

  const user = await fetchUser();
  const processedUser = processUser(user.id, user.name);

  console.log("Processed user:", processedUser);
}

main();