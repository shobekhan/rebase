export type User = {
  id: string
  name: string
  member: boolean
}

export default function showUser(user: User): void {
  console.log(`User ID: ${user.id}, User Name: ${user.name}, member: ${user.member}`)
  console.log(`Displayed user: ${user.name}`)
}