import { formatName } from "./utils/formatter";
import { validateUser } from "./utils/validator";
import { fetchUsers } from "./services/dataService";
import { logInfo } from "./utils/logger";

function main() {
  const users = fetchUsers();

  users.forEach((user) => {
    if (validateUser(user)) {
      logInfo(formatName(user.name));
    }
  });
}

main();