import {
  calculateSubtotal,
  calculateTax,
  calculateTotal
} from "../utils/priceUtils";

export interface OrderItem {
  name: string;
  price: number;
  quantity: number;
}

export class OrderService {
  createOrder(items: OrderItem[]) {
    const subtotal = items.reduce(
      (total, item) =>
        total + calculateSubtotal(item.price, item.quantity),
      0
    );

    const tax = calculateTax(subtotal, 0.19);
    const total = calculateTotal(subtotal, tax);

    return {
      subtotal,
      tax,
      total
    };
  }
}