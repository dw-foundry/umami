export function getRandomChars(n: number, chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') {
  return Array.from({ length: n }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}
