export function fetchUser(id) {
  return fetch(`/api/users/${id}`)
    .then(res => res.json());
}