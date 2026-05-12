import { StyleSheet } from 'react-native';
import { commonStyles } from '../../styles/common';
import { ThemeColors } from '../../theme/colors';
import Dimensions from '../../theme/Dimensions';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      ...commonStyles.flex1,
      backgroundColor: colors.primary,
    },
    listContainer: {
      marginTop: Dimensions.n(16),
      justifyContent: 'center',
      alignItems: 'flex-start',
      alignSelf: 'center',
      gap: Dimensions.n(8),
    },
  });
