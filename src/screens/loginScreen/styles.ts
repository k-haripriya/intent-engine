import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../theme/colors';
import { commonStyles } from '../../styles/common';
import FontStyles from '../../styles/fontStyles';
import Dimensions from '../../theme/Dimensions';
import { SPACING } from '../../theme/spacing';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    card: {
      backgroundColor: colors.primary,
      borderColor: colors.borderColor,
      borderRadius: Dimensions.n(10),
      borderWidth: Dimensions.n(1),
      elevation: Dimensions.n(2),
      gap: SPACING.LG,
      padding: Dimensions.n(20),
      shadowColor: colors.primaryText,
      width: Dimensions.n(300),
    },
    container: {
      backgroundColor: colors.primary,
      flex: 1,
      ...commonStyles.center,
    },
    title: {
      color: colors.primaryText,
      fontWeight: 'bold',
      ...FontStyles.montserratB16,
      textAlign: 'center',
    },
  });
