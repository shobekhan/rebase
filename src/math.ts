export interface LineItem {
    price: number;
    quantity: number;
}

export function calculateTotal(items: LineItem[]): number {
    return items.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);
}