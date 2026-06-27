import { fetchUsers } from "./services/api";
import { processUsers } from "./services/processor";
import { add } from "./utils/math";
import { log } from "./utils/logger";

const users = processUsers(fetchUsers());

log(users.join(", "));

console.log(add(2, 3));