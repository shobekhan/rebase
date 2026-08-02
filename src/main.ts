import { log } from "./utils/logger";
import { getUser } from "./services/user.service";
import { processPayment } from "./services/payment.service";
import { getOldConfig } from "./services/legacy.service";

export function run() {
  log("Starting app...");
  const user = getUser("1");
  const paid = processPayment(100);
  const config = getOldConfig();
  log(`User: ${user.name}, Paid: ${paid}, Version: ${config.version}`);
}

run();