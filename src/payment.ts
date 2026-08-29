export type Payment = {
    method: "CARD" | "PAYPAL";
    amount: number;
};

export function processPayment(payment: Payment): string {
    return `Processing ${payment.method} payment of €${payment.amount}`;
}