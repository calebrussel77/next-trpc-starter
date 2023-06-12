import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

export const formatDateToString = (
  date: Date | number | string,
  stringFormat = 'yyyy-MM-dd'
) => {
  return date
    ? format(new Date(date), stringFormat, { locale: fr })
    : undefined;
};
