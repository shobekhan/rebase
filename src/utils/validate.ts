export function isValidEmail(email: string): boolean {
    return email.includes("@");
}

export function isValidOrderAmount(amount: number): boolean {
    return amount > 0;
}