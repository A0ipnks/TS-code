type Person = {
    name: string;
    age: number;
    greet(): void;
};

let user: Person = {
    name: "Alice",
    age: 25,
    greet() {
        console.log("Hi!");
    }
};



interface 型 {
    name: string;
    age: number;
    greet(): void;
}
