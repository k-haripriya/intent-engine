import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../../theme/colors';
import Dimensions from '../../../theme/Dimensions';
import { commonStyles } from '../../../styles/common';
import { SPACING } from '../../../theme/spacing';
import FontStyles from '../../../styles/fontStyles';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.primary,
      ...commonStyles.flex1,
    },
    cake: {
      height: Dimensions.n(160),
      width: Dimensions.n(160),
    },
    card: {
      padding: SPACING.MD,
      ...commonStyles.flexRow,
      ...commonStyles.center,
      gap: SPACING.MD,
    },
    cardInfoView: {
      width: Dimensions.n(180),
    },
    cardTitle: {
      color: colors.primaryText,
      ...FontStyles.montserratSB14,
    },
    cardSubTitle: {
      color: colors.birthdayScreen.active,
      ...FontStyles.montserratSB14,
    },
    cardDes: {
      color: colors.primaryText,
      ...FontStyles.montserratM10,
      marginTop: Dimensions.n(8),
      lineHeight: Dimensions.n(16),
    },
    scrollContainer: {
      paddingBottom: Dimensions.n(50),
    },
  });
