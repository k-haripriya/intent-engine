import { StyleSheet } from 'react-native';
import { commonColors, ThemeColors } from '../../../../theme/colors';
import { SPACING } from '../../../../theme/spacing';
import FontStyles from '../../../../styles/fontStyles';
import Dimensions from '../../../../theme/Dimensions';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      margin: SPACING.MD,
      padding: SPACING.MD,
      borderWidth: Dimensions.n(1),
      borderColor: colors.borderColor,
      borderRadius: Dimensions.n(16),
    },
    title: {
      color: colors.primaryText,
      ...FontStyles.montserratSB14,
      textAlign: 'center',
      marginBottom: SPACING.MD,
    },
    detailsView: {
      gap: SPACING.MD,
    },
    profilePhotoView: {
      alignItems: 'center',
      marginBottom: SPACING.MD,
    },
    profileBg: {
      backgroundColor: colors.birthdayScreen.activeOverlay,
      borderRadius: Dimensions.n(50),
      padding: SPACING.MD,
    },
    plusView: {
      position: 'absolute',
      bottom: 4,
      right: 0,
      backgroundColor: colors.birthdayScreen.active,
      padding: Dimensions.n(3),
      borderRadius: Dimensions.n(50),
      alignItems: 'center',
      justifyContent: 'center',
    },
    uploadPhoto: {
      color: colors.primaryText,
      ...FontStyles.montserratSB10,
      marginTop: Dimensions.n(6),
    },
    saveBtn: {
      marginTop: SPACING.MD,
      backgroundColor: colors.birthdayScreen.active,
    },
    saveBtnTitle: {
      color: commonColors.white,
    },
    datePicker: {
      backgroundColor: colors.primary,
      borderRadius: Dimensions.n(16),
      padding: SPACING.MD,
    },
  });
