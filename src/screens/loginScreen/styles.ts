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
      gap: SPACING.LG,
      padding: Dimensions.n(20),
      width: Dimensions.n(300),
      marginTop: Dimensions.n(120),
      alignSelf: 'center',
    },
    container: {
      backgroundColor: colors.primary,
      flex: 1,
      padding: SPACING.MD,
      justifyContent: 'space-between',
    },
    title: {
      color: colors.primaryText,
      ...FontStyles.CourgetteR16,
      textAlign: 'center',
    },
    loginIcon: {
      ...commonStyles.flexRow,
      alignItems: 'center',
      gap: SPACING.SM,
    },
    loginText: {
      color: colors.primary,
      ...FontStyles.montserratSB12,
      textAlign: 'center',
      marginTop: SPACING.MD,
    },
    welcomeText: {
      textAlign: 'center',
      marginTop: SPACING.XL,
      color: colors.logo,
      ...FontStyles.CourgetteR26,
    },
    loginSubText: {
      color: colors.primaryText,
      ...FontStyles.montserratM10,
      textAlign: 'center',
      alignSelf: 'center',
      lineHeight: SPACING.MD,
    },
    width180: {
      width: Dimensions.n(180),
    },
    bottomView: {
      ...commonStyles.center,
    },
    orText: {
      color: colors.primaryText,
      ...FontStyles.montserratM10,
      textAlign: 'center',
      // width: Dimensions.n(180),
      alignSelf: 'center',
      marginBottom: SPACING.MD,
    },
    googleView: {
      ...commonStyles.flexRow,
      ...commonStyles.center,
    },
    googleText: {
      color: colors.primaryText,
      ...FontStyles.montserratSB12,
      marginLeft: SPACING.SM,
    },
    loginView: {
      ...commonStyles.flexRow,
      alignItems: 'center',
      gap: SPACING.SM,
      justifyContent: 'center',
    },
    loginBtn: {
      borderBottomWidth: Dimensions.n(1),
      borderBottomColor: colors.primaryText,
    },
    loginBtnText: {
      color: colors.primaryText,
      ...FontStyles.montserratSB12,
    },
  });
