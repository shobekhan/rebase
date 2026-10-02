import { User } from './user'

export function createOrder(user: User, amount: number): string {
  return `${user.name}: ${amount}`
}