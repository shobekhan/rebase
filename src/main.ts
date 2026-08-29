import { Order, calculateSubtotal, calculateDiscount } from "./order";
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
const discount = calculateDiscount(order);
const total = subtotal - discount;

console.log(`Order ${order.id}`);
console.log(`Subtotal: €${subtotal}`);
console.log(`Discount: €${discount}`);
console.log(`Total: €${total}`);

const payment: Payment = {
    method: "CARD",
    amount: total
};

console.log(processPayment(payment));