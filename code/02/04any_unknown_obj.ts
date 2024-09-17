export { };
// 正体がはっきりしないデータに一旦何かを付与しておきたい場合に用いられることが多い

let value: any;
value = 123;
value = "Hello";
value = true;

// any型の変数には自由にメソッドを呼び出せるが、実行時エラーのリスクがある
value.someMethod();  // コンパイルエラーは発生しないが、実行時にエラーになる可能性がある



let value: unknown;
value = 123;
value = "Hello";
value = true;

// 型チェックをしないと操作はできない
if (typeof value === "string") {
  console.log(value.toUpperCase());  // この場合は文字列として操作できる
}

// 型アサーション（キャスト）を使って明示的に操作を許可することも可能
console.log((value as string).toUpperCase()); // 型アサーションによる操作
