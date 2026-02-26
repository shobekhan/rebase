export async function fetchUser(id) {
    const response = await fetch(`/api/users/${id}`);

    if (!response.ok) {
        throw new Error("Failed to fetch user");
    }

    return response.json();
}