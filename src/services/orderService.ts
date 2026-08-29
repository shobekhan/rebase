import { calculateTotal } from "./priceService";

export interface Order {
  id: string;
  product: string;
  price: number;
  quantity: number;
}

export function createOrder(order: Order): string {
  const total = calculateTotal(order.price, order.quantity);

  return `Order ${order.id}: ${order.product} - ${total}`;
}