import {
  calculateNetAmount,
  calculateTax,
  formatCurrency
} from "../lib/currency";

import { OrderStatus, isValidStatus } from "../utils/orderStatus";

export function processOrder(
  orderId: string,
  amount: number,
  status: string
): string {
  if (!isValidStatus(status)) {
    throw new Error(`Invalid status: ${status}`);
  }

  const netAmount = calculateNetAmount(amount);
  const tax = calculateTax(netAmount);
  const total = netAmount + tax;

  return `${orderId}: ${formatCurrency(total)} (${status as OrderStatus})`;
}