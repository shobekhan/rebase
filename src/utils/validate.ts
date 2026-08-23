export function isValidEmail(email: string): boolean {
    return email.includes("@") && email.length >= 6;
}

export function isValidOrderAmount(amount: number): boolean {
    return amount > 0;
}

export function isValidCustomerId(customerId: string): boolean {
    return customerId.length > 0;
}