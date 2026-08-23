import { OrderProcessor } from "./processors/orderProcessor";
import { UserService } from "./services/userService";
import { log } from "./legacy/logger";

const processor = new OrderProcessor();
const userService = new UserService();

const userMessage = userService.createUser({
    id: "user-1",
    firstName: "John",
    lastName: "Smith",
    email: "john@example.com"
});

log(userMessage);

const orderMessage = processor.process("order-1", 250);

log(orderMessage);

console.log(
    `Discount: ${processor.calculateDiscount(250)}`
);