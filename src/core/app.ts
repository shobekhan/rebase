import { createUser } from "../services/user";
import { get } from "../services/api";
import { add } from "../utils/math";

const user = createUser("alice");

console.log(add(1, 2));
get("/health");