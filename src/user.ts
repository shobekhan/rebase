export interface User {
  id: number
  name: string
}

export function getUserDisplayName(user: User): string {
  return user.name
}