import { StyleSheet } from 'react-native';
import { commonStyles } from '../../../../styles/common';

export const createStyles = (colors: { primary: any }) =>
  StyleSheet.create({
    container: {
      ...commonStyles.flex1,
      backgroundColor: colors.primary,
      ...commonStyles.center,
    },
  });
