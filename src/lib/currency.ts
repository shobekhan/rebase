export function formatCurrency(amount: number): string {
  return `€ ${amount.toFixed(2)}`;
}

export function calculateTax(amount: number): number {
  return amount * 0.19;
}

export function calculateNetAmount(amount: number): number {
  return amount;
}