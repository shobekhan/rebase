export function calculateTotal(values: number[]): number {
  return values.reduce((sum, v) => sum + v, 0);
}