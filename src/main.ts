import { fetchOrder } from "./services/apiService";
import { processOrder } from "./processors/orderProcessor";
import { logInfo } from "./lib/logger";

async function main(): Promise<void> {
  const orderId = "1001";

  logInfo("Starting application");

  const order = await fetchOrder(orderId);

  const result = processOrder(order, 100, "NEW");

  console.log(result);
}

main();