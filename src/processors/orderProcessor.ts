import {
  Order,
  calculateOrderTotal
} from "../services/orderService";

import { logInfo } from "../utils/logger";

export function processOrder(order: Order): string {
  const total = calculateOrderTotal(order);

  logInfo(`Processing ${order.id}`);

  return total;
}
