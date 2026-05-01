import { calculateTotal } from "./math";
import { formatCurrency } from "./formatter";

export function generateInvoice(items: number[]): string {
    const total = calculateTotal(items);
    return `Total: ${formatCurrency(total)}`;
}