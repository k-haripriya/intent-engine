import { StyleSheet } from 'react-native';
import fonts from '../theme/fonts';

export const getFont = (font: string, size: number) => {
  return { fontFamily: font, fontSize: fonts.n(size) };
};

const FontStyles = StyleSheet.create({
  montserratB14: getFont(fonts.MONTSERRAT_BOLD, 14),
  montserratEB12: getFont(fonts.MONTSERRAT_EXTRA_BOLD, 12),
  montserratM10: getFont(fonts.MONTSERRAT_MEDIUM, 10),
  montserratSB12: getFont(fonts.MONTSERRAT_SEMIBOLD, 12),
});

export default FontStyles;
