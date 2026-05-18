import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../theme/colors';
import Dimensions from '../../theme/Dimensions';
import { commonStyles } from '../../styles/common';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: { ...commonStyles.flex1, backgroundColor: colors.primary },
    plusButton: {
      borderRadius: Dimensions.n(30),
      padding: Dimensions.n(6),
      ...commonStyles.center,
      elevation: Dimensions.n(5),
      paddingBottom: Dimensions.n(8),
      paddingHorizontal: Dimensions.n(7),
    },
  });
