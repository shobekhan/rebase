function calculateTotal(items: { name: string; price: number }[]): number {
  let total = 0;
  for (const item of items) {
    total += item.price;
  }
  const discount = total > 5 ? 0.2 : 0;
  const finalTotal = total - total * discount;
  console.log(`Total after discount: $${finalTotal}`);
  return finalTotal;
}

const items = [
  { name: "Apple", price: 1 },
  { name: "Banana", price: 2 },
  { name: "Cherry", price: 3 },
];

calculateTotal(items);