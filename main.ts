function calculateTotal(items: Array<{ name: string; price: number }>): number {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price;
  }
  console.log("Total:", total);
  return total;
}

const items = [
  { name: "Apple", price: 1 },
  { name: "Banana", price: 2 },
  { name: "Cherry", price: 3 },
];

calculateTotal(items);