export function calculateTotal(price: number, quantity: number): number {
  return price * quantity;
}

export function calculateTax(amount: number, taxRate: number): number {
  return amount * taxRate;
}
