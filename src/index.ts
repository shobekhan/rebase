import { getUserName, User } from './user'

const user: User = {
  id: 1,
  name: 'John'
}

console.log(getUserName(user))