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

export const hexToRgba = (hex: string, alpha: number = 1): string => {
  const normalizedHex = hex.replace('#', '');

  const fullHex =
    normalizedHex.length === 3
      ? normalizedHex
          .split('')
          .map(char => char + char)
          .join('')
      : normalizedHex;

  const r = parseInt(fullHex.substring(0, 2), 16);
  const g = parseInt(fullHex.substring(2, 4), 16);
  const b = parseInt(fullHex.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
