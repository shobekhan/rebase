export function calculateSubtotal(
  price: number,
  quantity: number
): number {
  return price * quantity;
}

export function calculateTax(
  amount: number,
  taxRate: number
): number {
  return amount * taxRate;
}

export function calculateTotal(
  subtotal: number,
  tax: number
): number {
  return subtotal + tax;
}