export interface User {
  id: number
  name: string
}

export function getUserDisplayName(user: User): string {
  return `User: ${user.name}`
}