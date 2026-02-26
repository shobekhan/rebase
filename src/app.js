import { fetchUser } from "./api.js";
import { formatName } from "./utils.js";

export async function showUser(id) {
    const user = await fetchUser(id);
    console.log("User:", formatName(user));
}