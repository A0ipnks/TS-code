// 関数宣言
function greet(name: string): string {
  return `こんにちは、${name}さん！`;
}
  
console.log(greet("太郎")); 

// 関数式
const greet = function (name: string): string {
  return `こんにちは、${name}さん！`;
};

console.log(greet("花子"));

// アロー関数
const greet = (name: string): string => {
  return `こんにちは、${name}さん！`;
};

console.log(greet("一郎")); 