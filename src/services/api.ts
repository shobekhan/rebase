export interface User {
  id: string;
  name: string;
}

export async function fetchUser(id: string): Promise<User> {
  return {
    id,
    name: "Alice"
  };
}