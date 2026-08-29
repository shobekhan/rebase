import { calculateTax, formatCurrency } from "../utils/currency";
import { OrderStatus, isValidStatus } from "../utils/orderStatus";

export function processOrder(
  orderId: string,
  amount: number,
  status: string
): string {
  if (!isValidStatus(status)) {
    throw new Error(`Invalid status: ${status}`);
  }

  const tax = calculateTax(amount);
  const total = amount + tax;

  return `${orderId}: ${formatCurrency(total)} (${status as OrderStatus})`;
}