import { calculateTotal, LineItem } from "./math";
import { formatCurrency } from "./formatter";

export function generateInvoice(items: LineItem[]): string {
    const total = calculateTotal(items);

    return `Total: ${formatCurrency(total, "en-US")}`;
}