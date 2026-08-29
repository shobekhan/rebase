export interface OrderItem {
  name: string;
  price: number;
  quantity: number;
}

export class OrderService {
  createOrder(items: OrderItem[]) {
    const subtotal = items.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    );

    const shipping = subtotal >= 100 ? 0 : 10;

    const tax =
      Math.round((subtotal + shipping) * 0.19 * 100) / 100;

    const total =
      subtotal + shipping + tax;

    return {
      subtotal,
      shipping,
      tax,
      total
    };
  }
}