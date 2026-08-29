import { logInfo } from "../utils/logger";

export function processLegacyOrder(orderId: string): void {
  logInfo(`Processing legacy order ${orderId}`);
}