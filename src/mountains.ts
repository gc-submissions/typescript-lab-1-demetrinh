export interface Mountain {
  name: string;
  height: number;
}

let mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 },
];

export const findNameOfTallestMountain = (array: Mountain[]): string => {
  let tallestMtnName = array[0].name;
  let tallestMtnHeight = array[0].height;
  for (let mtn of array) {
    if (mtn.height > tallestMtnHeight) {
      mtn.name = tallestMtnName;
      mtn.height = tallestMtnHeight;
    }
  }
  return tallestMtnName;
};
let tallestName: string = findNameOfTallestMountain(mountains);
console.log(tallestName);
