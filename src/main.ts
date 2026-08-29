import { OrderService } from "./services/orderService";

const service = new OrderService();

const order = service.createOrder([
  {
    name: "Keyboard",
    price: 100,
    quantity: 2
  },
  {
    name: "Mouse",
    price: 50,
    quantity: 1
  }
]);

console.log("Order:", order);