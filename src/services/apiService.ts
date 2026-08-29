import { logInfo } from "../utils/logger";

export async function fetchOrder(orderId: string): Promise<string> {
  logInfo(`Fetching order ${orderId}`);

  return `Order-${orderId}`;
}