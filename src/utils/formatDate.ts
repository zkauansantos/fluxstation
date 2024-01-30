export default function formatDate(date: Date | string) {
  return new Intl.DateTimeFormat('pt-br').format(new Date(date));
}
