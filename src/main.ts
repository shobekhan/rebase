import { Logger } from "./utils/logger";
import { validateEmail } from "./utils/validation";
import { formatName } from "./utils/format";
import { fetchUsers } from "./services/apiClient";

async function run() {
  const logger = new Logger();

  logger.info("Starting app");

  const users = await fetchUsers();

  const valid = users.filter(validateEmail);

  console.log(valid.map(formatName));
}

run();