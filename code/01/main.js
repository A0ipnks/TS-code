function add(a, b) {
  return a + b;
}

console.log(add(5, "10"));

// ②開発体験の向上
function greetUser(user) {
  return `Hello, ${user.name}!`;
}

console.log(greetUser({ firstName: "Charlie" }));