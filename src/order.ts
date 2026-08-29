export type OrderItem = {
    name: string;
    price: number;
    quantity: number;
};

export type Order = {
    id: number;
    customer: string;
    items: OrderItem[];
};

export function calculateSubtotal(order: Order): number {
    return order.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
}