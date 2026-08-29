import { formatCurrency } from "../utils/formatUtils";

export function calculateTotal(price: number, quantity: number): string {
  const total = price * quantity;

  return formatCurrency(total);
}