import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formatDatetime(rawDate: string): string {
  const date = new Date(rawDate);

  return format(date, "dd/MM/yyyy 'às' HH'h'mm", {
    //formatacao
    locale: ptBR,
  });
}

export function formatRelativeDate(rawDate: string): string {
  const date = new Date(rawDate);

  return formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true, // vai adicionar "há" tantos min atras
  });
}
