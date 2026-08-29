import { Order, calculateSubtotal } from "./order";
import { Payment, processPayment } from "./payment";

const order: Order = {
    id: 1001,
    customer: "Alice",
    items: [
        { name: "Laptop", price: 1000, quantity: 1 },
        { name: "Mouse", price: 50, quantity: 2 }
    ]
};

const subtotal = calculateSubtotal(order);

console.log(`Order ${order.id}`);
console.log(`Order subtotal: €${subtotal}`);

const payment: Payment = {
    method: "CARD",
    amount: subtotal
};

console.log(processPayment(payment));