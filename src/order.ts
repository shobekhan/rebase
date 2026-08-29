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

export function calculateDiscount(order: Order): number {
    const subtotal = calculateSubtotal(order);

    if (subtotal >= 800) {
        return subtotal * 0.05;
    }

    return 0;
}