// type
type personType = {
	id: number;
	name: string;
	age: number;
}
type personTypeNew = {
	birthday: string;
}&personType　//&型名で継承することができる


// interface
interface personInterface {
	id: number;
	name: string;
	age: number;
}

//①同じ名前で再宣言して上書きするやり方
interface personInterface {
	id: number;
	name: string;
	age: number;
	//新しく追加↓
	birthday: string;
}
//②新たな型を宣言して継承するやり方
const personInterfaceNew extends personInterface {
	birthday: string;
}