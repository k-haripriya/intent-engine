import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../../theme/colors';
import Dimensions from '../../../theme/Dimensions';
import { SPACING } from '../../../theme/spacing';
import { commonStyles } from '../../../styles/common';
import FontStyles from '../../../styles/fontStyles';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.birthdayScreen.cardBg,
      borderWidth: Dimensions.n(1),
      borderColor: colors.birthdayScreen.divider,
      marginVertical: Dimensions.n(4),
      padding: SPACING.MD,
      borderRadius: Dimensions.n(12),
      elevation: Dimensions.n(2),
    },
    detailsView: {
      flexDirection: 'row',
      gap: Dimensions.n(10),
      alignItems: 'center',
    },
    profile: {
      height: Dimensions.n(50),
      width: Dimensions.n(50),
      borderRadius: Dimensions.n(50),
    },
    profileContainer: {
      borderRadius: Dimensions.n(50),
      padding: Dimensions.n(2),
      backgroundColor: colors.birthdayScreen.active,
      alignSelf: 'flex-start',
    },
    name: {
      color: colors.primaryText,
      ...FontStyles.montserratSB12,
    },
    bday: {
      color: colors.secondaryText,
      ...FontStyles.montserratM10,
    },
    text: {
      color: colors.primaryText,
      ...FontStyles.montserratM10,
    },
    gap2: {
      gap: Dimensions.n(2),
    },
    buttonsView: {
      ...commonStyles.flexRow,
      gap: Dimensions.n(10),
      alignItems: 'center',
      marginTop: Dimensions.n(16),
    },
    actionBtns: {
      padding: Dimensions.n(5),
      backgroundColor: colors.birthdayScreen.activeOverlay,
      paddingHorizontal: Dimensions.n(16),
      borderRadius: Dimensions.n(8),
      ...commonStyles.flexRow,
      gap: Dimensions.n(5),
      alignItems: 'center',
    },
    extraBtn: {
      backgroundColor: colors.bgColor,
      padding: Dimensions.n(10),
      paddingHorizontal: Dimensions.n(10),
      borderRadius: Dimensions.n(20),
      justifyContent: 'center',
      ...commonStyles.flexRow,
      gap: Dimensions.n(3),
    },
    dot: {
      height: Dimensions.n(3),
      width: Dimensions.n(3),
      backgroundColor: colors.secondary,
      borderRadius: Dimensions.n(6),
    },
    alignEnd: {
      alignItems: 'flex-end',
    },
  });
