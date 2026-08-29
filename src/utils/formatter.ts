export function formatCurrency(amount: number): string {
  return `EUR ${amount.toFixed(2)}`;
}

export function formatOrderId(id: string): string {
  return `ORDER-${id}`;
}
