import moment from 'moment';

export const formatDateTime = (
  date: Date | string | number,
  format: string = 'DD MMM YYYY, hh:mm A',
): string => {
  if (!date) {
    return '--';
  }

  return moment(date).format(format);
};
