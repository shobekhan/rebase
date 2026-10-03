export type User = {
    id: string
    name: string
    member?: boolean
}

export default function showUser(user: User): void {
    if (user.member) {
        console.log(`User ID: ${user.id}, User Name: ${user.name} (Member)`)
    } else {
        console.log(`User ID: ${user.id}, User Name: ${user.name}`)
    }
}