import { calculateTotal } from "../utils/math";
import { formatCurrency } from "../utils/formatter";

export function processOrder(
  order: any
): string {
  const total = calculateTotal(
    order.price,
    order.quantity
  );

  return formatCurrency(total);
}