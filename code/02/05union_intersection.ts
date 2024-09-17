export { };
let union: number | string;

union = 42;      // OK
union = "hello"; // OK
union = true;    // エラー: 'boolean'型は 'number | string' 型に割り当てられません



type Animal = {
  species: string;
};

type Pet = {
  name: string;
};

type PetAnimal = Animal & Pet;

const myPet: PetAnimal = {
  species: "Dog",
  name: "Buddy"
};
