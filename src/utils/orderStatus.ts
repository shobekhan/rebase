export type OrderStatus = "NEW" | "PAID" | "SHIPPED";

export function isValidStatus(status: string): boolean {
  return ["NEW", "PAID", "SHIPPED"].includes(status);
}