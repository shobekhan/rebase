import { getUserName, User } from './user-service'

const user: User = {
  id: 1,
  name: 'John'
}

console.log(getUserName(user))