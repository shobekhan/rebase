export interface User {
  id: number
  name: string
  active: boolean
}

export function getUserName(user: User): string {
  if (!user.active) {
    return 'Inactive user'
  }

  return user.name
}