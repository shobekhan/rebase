export interface User {
  id: number
  name: string
}

export function getUserName(user: User): string {
  return user.name
}