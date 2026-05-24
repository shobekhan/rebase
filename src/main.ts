import { add } from "./utils/math";
import { capitalize } from "./utils/string";
import { getUserName } from "./services/userService";
import { log } from "./services/logger";

log(capitalize("system starting"));
log(`1 + 2 = ${add(1, 2)}`);
log(getUserName(1));