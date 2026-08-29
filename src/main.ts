import { processOrder } from "./processors/orderProcessor";
import { getOrder } from "./services/api";

async function main(): Promise<void> {
  const order = {
    id: "1001",
    price: 50,
    quantity: 2,
    taxRate: 0.19
  };

  const total = processOrder(order);

  console.log(`Total: ${total}`);

  const remoteOrder = await getOrder(order.id);

  console.log(remoteOrder);
}

main();
