export { };
function add(a: number, b: number) {
  return a + b;
}

// 間違った使用（実行時に発覚）
console.log(add(5, "10"));




// ②開発体験の向上
interface User {
  name: string;
  age?: number; // オプショナルプロパティ
}

function greetUser(user: User): string {
  return `Hello, ${user.name}!`;
}

// 関数の利用
console.log(greetUser({ firstName: "Charlie" }));
// コンパイルエラー: 型 '{ firstName: string; }' を型 'User' に割り当てることはできません。
