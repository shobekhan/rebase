import { Order } from "../models/order";

export function fetchOrder(id: string): Order {
  return {
    id,
    amount: 100,
    isComplete: false
  };
}