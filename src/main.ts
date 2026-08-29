import { fetchOrder } from "./services/apiService";
import { processLegacyOrder } from "./services/legacyOrderService";
import { processOrder } from "./processors/orderProcessor";
import { logInfo } from "./utils/logger";

async function main(): Promise<void> {
  const orderId = "1001";

  logInfo("Starting application");

  const order = await fetchOrder(orderId);

  processLegacyOrder(orderId);

  const result = processOrder(order, 100, "NEW");

  console.log(result);
}

main();