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
            throw new Error("Order amount must be positive");
        }

        return `Order ${order.id} created for ${formatCurrency(
            order.amount
        )}`;
    }

    getOrderTotal(order: Order): number {
        return order.amount;
    }

    getOrderDescription(order: Order): string {
        return `Order ${order.id} for customer ${order.customerId}`;
    }
}