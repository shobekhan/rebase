import { OrderService } from "../services/orderService";
import { formatCurrency } from "../utils/format";

export class OrderProcessor {
    private orderService = new OrderService();

    process(orderId: string, amount: number): string {
        const message = this.orderService.createOrder({
            id: orderId,
            customerId: "customer-1",
            amount
        });

        return `${message} Total: ${formatCurrency(amount)}`;
    }
}