import { calculateTotal, calculateTax } from "../utils/money";
import { formatCurrency } from "../utils/formatter";

export interface Order {
  id: string;
  price: number;
  quantity: number;
  taxRate: number;
}

export function calculateOrderTotal(order: Order): string {
  const subtotal = calculateTotal(order.price, order.quantity);
  const tax = calculateTax(subtotal, order.taxRate);

  return formatCurrency(subtotal + tax);
}
