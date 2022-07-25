import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt';

export function formatDate(date: string) {
  return format(new Date(date), "EEEE' • 'd' • 'MMMM' • 'y'", {
    locale: ptBR,
  });
}
