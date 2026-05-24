import { createUser } from "./services/userService";
import { get } from "./services/apiClient";
import { add } from "./utils/math";
import { formatName } from "./utils/format";

const user = createUser({
  id: "1",
  name: formatName("Jane", "Doe"),
  email: "jane@example.com"
});

console.log(add(2, 3));

get("/health").then(console.log);