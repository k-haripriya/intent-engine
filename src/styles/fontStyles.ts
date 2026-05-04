import { StyleSheet } from 'react-native';
import fonts from '../theme/fonts';

export const getFont = (font: string, size: number) => {
  return { fontFamily: font, fontSize: fonts.n(size) };
};

const FontStyles = StyleSheet.create({
  montserratEB12: getFont(fonts.MONTSERRAT_EXTRA_BOLD, 12),
});

export default FontStyles;
