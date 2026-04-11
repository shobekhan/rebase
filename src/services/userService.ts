import { Customer } from "../models/customer";

export function getDisplayName(customer: Customer): string {
  return customer.fullName.toUpperCase();
}

export function isUserActive(customer: Customer): boolean {
  return customer.active;
}