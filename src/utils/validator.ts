export function validateUser(user: { name: string }): boolean {
  return user.name.length > 0;
}