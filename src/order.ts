import { User } from './user'

export function createOrder(user: User, amount: number): string {
  if (amount <= 0) {
    throw new Error('Amount must be greater than zero')
  }

  return `${user.name}: ${amount}`
}