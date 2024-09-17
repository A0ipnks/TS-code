// オプショナル引数
function logMessage(message: string, user?: string): void {
  console.log(user ? `${user}: ${message}` : message);
}
// デフォルト引数
function calculatePrice(price: number, discount: number = 0.1): number {
  return price * (1 - discount);
}
