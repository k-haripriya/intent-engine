import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const scale = SCREEN_WIDTH / 375;
const nBaselineHeight = 812;

export function normalize(size: number) {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

export function normalizeNew(size: number) {
  const verticalScale = (SCREEN_HEIGHT / nBaselineHeight) * size;
  return Math.round(PixelRatio.roundToNearestPixel(verticalScale));
}

export default {
  MONTSERRAT_REGULAR: 'Montserrat-Regular',
  MONTSERRAT_MEDIUM: 'Montserrat-Medium',
  MONTSERRAT_SEMIBOLD: 'Montserrat-SemiBold',
  MONTSERRAT_BOLD: 'Montserrat-Bold',
  MONTSERRAT_ITALIC: 'Montserrat-Italic',
  MONTSERRAT_MEDIUM_ITALIC: 'Montserrat-MediumItalic',
  MONTSERRAT_SEMIBOLD_ITALIC: 'Montserrat-SemiBoldItalic',
  MONTSERRAT_BOLD_ITALIC: 'Montserrat-BoldItalic',
  MONTSERRAT_THIN: 'Montserrat-Thin',
  MONTSERRAT_THIN_ITALIC: 'Montserrat-ThinItalic',
  MONTSERRAT_LIGHT: 'Montserrat-Light',
  MONTSERRAT_LIGHT_ITALIC: 'Montserrat-LightItalic',
  MONTSERRAT_EXTRA_LIGHT: 'Montserrat-ExtraLight',
  MONTSERRAT_EXTRA_LIGHT_ITALIC: 'Montserrat-ExtraLightItalic',
  MONTSERRAT_EXTRA_BOLD: 'Montserrat-ExtraBold',
  MONTSERRAT_EXTRA_BOLD_ITALIC: 'Montserrat-ExtraBoldItalic',
  MONTSERRAT_BLACK: 'Montserrat-Black',
  MONTSERRAT_BLACK_ITALIC: 'Montserrat-BlackItalic',
  COURGETTE: 'Courgette-Regular',
  fontSize: normalize,
  n: normalize,
  nn: normalizeNew,
};
