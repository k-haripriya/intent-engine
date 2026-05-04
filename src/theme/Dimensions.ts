import { Dimensions, PixelRatio } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const rem = SCREEN_WIDTH / 375;
const tabletRem = SCREEN_WIDTH / 768;
const nBaselineHeight = 812;
const { width } = Dimensions.get('window');

export function normalize(size: number) {
  const newSize = size * rem;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

export function normalizeNew(size: number) {
  const verticalScale = (SCREEN_HEIGHT / nBaselineHeight) * size;
  return Math.round(PixelRatio.roundToNearestPixel(verticalScale));
}

export function normalizeTablet(size: number) {
  const newSize = size * tabletRem * 2;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

export const handleisIpad = () => {
  const isIpad: boolean = width > 768;
  return isIpad;
};

export const isTablet = () => {
  return DeviceInfo.isTablet();
};

export function moderateScale(size: number, factor = 0.5) {
  const newSize = size + (normalize(size) - size) * factor;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

export default {
  n: normalize,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  tab: normalizeTablet,
  nn: normalizeNew,
  tabT: handleisIpad,
  isTablet: isTablet,
  M: moderateScale,
};
