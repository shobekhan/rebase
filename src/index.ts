import { getUserName, User } from './user-service'

const user: User = {
  id: 1,
  name: 'John',
  email: 'john@example.com'
}

console.log(getUserName(user))