import {
    Order,
    calculateSubtotal,
    calculateDiscount,
    calculateTax
} from "./order";

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
const tax = calculateTax(order);
const total = subtotal - discount + tax;

console.log(`Order ${order.id}`);
console.log(`Subtotal: €${subtotal}`);
console.log(`Discount: €${discount}`);
console.log(`Tax: €${tax}`);
console.log(`Final total: €${total}`);

const payment: Payment = {
    method: "CARD",
    amount: total
};

console.log(processPayment(payment));