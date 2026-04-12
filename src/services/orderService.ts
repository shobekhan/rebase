import { Order } from "../models/order";

export function getOrderTotal(order: Order): number {
  return order.amount;
}

export function isCompleted(order: Order): boolean {
  return order.isComplete;
}