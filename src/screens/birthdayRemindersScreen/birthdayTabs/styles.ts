import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../../theme/colors';
import { SPACING } from '../../../theme/spacing';
import { commonStyles } from '../../../styles/common';
import FontStyles from '../../../styles/fontStyles';
import Dimensions from '../../../theme/Dimensions';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.bgColor,
      margin: SPACING.MD,
      marginBottom: SPACING.MD,
      padding: SPACING.SM,
      ...commonStyles.flexRow,
      ...commonStyles.center,
      gap: SPACING.SM,
      borderRadius: Dimensions.n(8),
    },
    tabContainer: {
      ...commonStyles.flex1,
      ...commonStyles.center,
      ...commonStyles.flexRow,
      gap: SPACING.SM,
      padding: Dimensions.n(4),
      borderRadius: Dimensions.n(8),
      backgroundColor: colors.primary,
    },
    tabText: {
      color: colors.primaryText,
      ...FontStyles.montserratM12,
      marginTop: Dimensions.n(2),
    },
    activeTabText: {
      color: colors.birthdayScreen.active,
    },
    activeTab: {
      backgroundColor: colors.birthdayScreen.activeOverlay,
    },
  });
