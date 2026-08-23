import { formatCurrency } from "../utils/format";
import { isValidOrderAmount } from "../utils/validate";

export interface Order {
    id: string;
    customerId: string;
    amount: number;
}

export class OrderService {
    createOrder(order: Order): string {
        if (!isValidOrderAmount(order.amount)) {
            throw new Error("Invalid order amount");
        }

        return `Order ${order.id} created for ${formatCurrency(order.amount)}`;
    }

    getOrderTotal(order: Order): number {
        return order.amount;
    }
}