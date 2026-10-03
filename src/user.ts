export type User = {
  id: string
  name: string
}

export default function showUser(user: User): void {
  console.log(`User ID: ${user.id}, User Name: ${user.name}`)
}