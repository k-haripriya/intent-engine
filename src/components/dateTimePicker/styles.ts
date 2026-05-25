import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../theme/colors';
import Dimensions from '../../theme/Dimensions';
import { SPACING } from '../../theme/spacing';
import { commonStyles } from '../../styles/common';
import FontStyles from '../../styles/fontStyles';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.primary,
    },
    datePicker: {
      backgroundColor: colors.primary,
      borderRadius: Dimensions.n(16),
      padding: SPACING.MD,
    },
    buttonsContainer: {
      ...commonStyles.flexRow,
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: SPACING.XL,
      marginTop: SPACING.MD,
    },
    button: {},
    cancelText: {
      color: colors.primaryText,
      ...FontStyles.montserratSB12,
    },
    confirmText: {
      color: colors.birthdayScreen.active,
      ...FontStyles.montserratSB12,
    },
    titleText: {
      color: colors.primaryText,
      ...FontStyles.montserratSB14,
      textAlign: 'center',
      marginBottom: SPACING.MD,
    },
  });
