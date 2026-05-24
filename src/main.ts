import { formatName } from "./utils/formatter";
import { calculateTotal } from "./utils/math";
import { fetchUser } from "./services/api";
import { logMessage } from "./utils/logger";
import { cacheUser } from "./services/cache";

async function run(): Promise<void> {
  const user = await fetchUser("42");

  const name = formatName(user.name);
  const total = calculateTotal([10, 20, 30]);

  logMessage(`User: ${name}`);
  logMessage(`Total: ${total}`);

  cacheUser(user);
}

run();