export function formatPrice(price: number | string) {
  return Number(price).toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
}
