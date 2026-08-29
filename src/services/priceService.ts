import { formatCurrency } from "../lib/formatUtils";

export function calculateTotal(price: number, quantity: number): string {
  const total = price * quantity;

  return formatCurrency(total);
}