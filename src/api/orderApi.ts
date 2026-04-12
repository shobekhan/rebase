import { Order } from "../models/order";

export async function fetchOrder(id: string): Promise<Order> {
  return {
    id,
    amount: 100,
    status: "open" as any
  };
}