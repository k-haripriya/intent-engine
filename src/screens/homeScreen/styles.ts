import { StyleSheet } from 'react-native';
import { commonStyles } from '../../styles/common';
import { ThemeColors } from '../../theme/colors';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      ...commonStyles.flex1,
      backgroundColor: colors.primary,
    },
  });
