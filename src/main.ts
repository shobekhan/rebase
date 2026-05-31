import { fetchOrders } from "./api/client";
import { processOrder } from "./processors/orderProcessor";
import { log } from "./utils/logger";

async function main(): Promise<void> {
  const orders = await fetchOrders();

  for (const order of orders) {
    log(processOrder(order));
  }
}

main();