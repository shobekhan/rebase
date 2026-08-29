import { formatCurrency } from "../lib/formatUtils";

export interface Order {
  id: string;
  product: string;
  price: number;
  quantity: number;
}

export function createOrder(order: Order): string {
  const total = order.price * order.quantity;

  return `Order ${order.id}: ${order.product} - Total: ${formatCurrency(total)}`;
}