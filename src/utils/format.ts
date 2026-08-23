export function formatCurrency(amount: number): string {
    return `€ ${amount.toLocaleString("de-DE", {
        minimumFractionDigits: 2
    })}`;
}

export function formatCustomerName(
    firstName: string,
    lastName: string
): string {
    return `${firstName} ${lastName}`;
}

export function formatOrderSummary(
    orderId: string,
    amount: number
): string {
    return `Order ${orderId}: ${formatCurrency(amount)}`;
}