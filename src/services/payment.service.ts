import { calculateTax } from "../utils/math";

export function processPayment(amount: number): boolean {
  const tax = calculateTax(amount);
  return amount + tax > 0;
}