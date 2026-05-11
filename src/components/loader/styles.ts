import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../theme/colors';
import { commonStyles } from '../../styles/common';
import FontStyles from '../../styles/fontStyles';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      ...commonStyles.flex1,
      ...commonStyles.center,
      backgroundColor: colors.primary,
    },
    loadingtext: {
      color: colors.primaryText,
      ...FontStyles.CourgetteR16,
    },
  });
