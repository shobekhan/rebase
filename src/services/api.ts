export interface User {
  id: string;
  name: string;
  email: string;
}

export async function fetchUser(id: string): Promise<User> {
  return {
    id,
    name: "Alice",
    email: "alice@example.com"
  };
}