import { StyleSheet } from 'react-native';
import { commonColors, ThemeColors } from '../../../theme/colors';
import Dimensions from '../../../theme/Dimensions';
import { SPACING } from '../../../theme/spacing';
import { commonStyles } from '../../../styles/common';
import FontStyles from '../../../styles/fontStyles';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      padding: SPACING.MD,
      paddingTop: Dimensions.nn(0),
    },
    cardContainer: {
      backgroundColor: colors.birthdayScreen.cardOverlay,
      borderWidth: Dimensions.n(1),
      borderColor: colors.birthdayScreen.borderColor,
      borderRadius: Dimensions.n(8),
      ...commonStyles.flexRow,
      ...commonStyles.rowBetween,
      padding: Dimensions.n(12),
    },
    cake: {
      position: 'absolute',
      left: Dimensions.n(6),
      top: Dimensions.n(14),
    },
    title: {
      color: colors.birthdayScreen.active,
      ...FontStyles.montserratSB14,
    },
    subTitle: {
      color: colors.primaryText,
      ...FontStyles.montserratM10,
      marginTop: Dimensions.n(4),
    },
    gap16: {
      gap: Dimensions.n(16),
      width: Dimensions.n(150),
    },
    countView: {
      position: 'absolute',
      top: Dimensions.n(12),
      right: Dimensions.n(12),
      backgroundColor: colors.bgColor,
      padding: Dimensions.n(5),
      paddingHorizontal: Dimensions.n(10),
      borderRadius: Dimensions.n(50),
      ...commonStyles.center,
    },
    countText: {
      color: colors.birthdayScreen.active,
      ...FontStyles.montserratB14,
    },
    countDes: {
      color: colors.birthdayScreen.active,
      ...FontStyles.montserratM8,
    },
    btn: {
      backgroundColor: colors.birthdayScreen.active,
      marginTop: Dimensions.n(10),
      paddingVertical: Dimensions.n(8),
    },
    btnText: {
      color: commonColors.white,
      ...FontStyles.montserratSB12,
      textAlign: 'center',
    },
    upcomingSection: {
      marginVertical: SPACING.LG,
    },
    upcomingTitle: {
      ...FontStyles.montserratSB12,
      color: colors.primaryText,
    },
    sortText: {
      ...FontStyles.montserratSB12,
      color: colors.birthdayScreen.active,
    },
  });
