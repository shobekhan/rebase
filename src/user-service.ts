export interface User {
  id: number
  name: string
  email: string
}

export function getUserName(user: User): string {
  return `${user.name} <${user.email}>`
}