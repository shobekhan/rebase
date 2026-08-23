export function formatCurrency(amount: number): string {
    return `€${amount.toFixed(2)}`;
}

export function formatCustomerName(
    firstName: string,
    lastName: string
): string {
    return `${firstName} ${lastName}`;
}