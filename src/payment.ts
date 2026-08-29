export type Payment = {
    method: "CARD" | "PAYPAL";
    amount: number;
};

export function processPayment(payment: Payment): string {
    if (payment.amount <= 0) {
        throw new Error("Payment amount must be greater than zero");
    }

    return `Processing ${payment.method} payment of €${payment.amount}`;
}