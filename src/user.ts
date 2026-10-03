import logger from "./logger"

export type User = {
  id: string
  name: string
}

export default function showUser(user: User): void {
  console.log(`User ID: ${user.id}, User Name: ${user.name}`)
  logger(`Displayed user: ${user.name}`)
}