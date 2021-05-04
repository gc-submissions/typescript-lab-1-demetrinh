export interface Product {
  name: string;
  price: number;
}

let products: Product[] = [
  { name: "4Runner", price: 40000 },
  { name: "Camry", price: 25000 },
  { name: "86", price: 20000 },
  { name: "Tacoma", price: 35000 },
];
export const calcAverageProductPrice = (array: Product[]): number => {
  let sum = 0;
  for (let item of array) {
    sum += item.price;
  }
  if (array.length !== 0) {
    return sum / array.length;
  } else {
    return 0;
  }
};

let result: number = calcAverageProductPrice(products);
console.log(result);
