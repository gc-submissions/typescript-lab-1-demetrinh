import { Product } from "./products";

export interface InventoryItem {
  product: Product;
  quantity: number;
}

let inventory: InventoryItem[] = [
  { product: { name: "motor", price: 10.0 }, quantity: 10 },
  { product: { name: "sensor", price: 12.5 }, quantity: 40 },
  { product: { name: "LED", price: 1.0 }, quantity: 20 },
];

export const calcInventoryValue = (array: InventoryItem[]): number => {
  let value = 0;
  for (let item of array) {
    let itemValue = item.product.price * item.quantity;
    value += itemValue;
  }
  return value;
};

let intValue: number = calcInventoryValue(inventory);
console.log(intValue);
