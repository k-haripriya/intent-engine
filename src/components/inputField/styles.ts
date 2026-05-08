import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../theme/colors';
import Dimensions from '../../theme/Dimensions';
import FontStyles from '../../styles/fontStyles';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    errorText: {
      color: colors.error,
      marginTop: Dimensions.n(5),
    },
    errorView: {
      borderColor: colors.error,
      borderWidth: Dimensions.n(0.6),
    },
    inputContainer: { marginTop: Dimensions.n(0) },
    label: {
      color: colors.primaryText,
      marginBottom: Dimensions.n(5),
      ...FontStyles.montserratM10,
    },
    labelView: {
      backgroundColor: colors.primary,
      left: Dimensions.n(15),
      paddingHorizontal: Dimensions.n(8),
      position: 'absolute',
      top: Dimensions.n(-7),
      zIndex: 100,
    },
    textInput: {
      borderColor: colors.borderColor,
      borderRadius: Dimensions.n(10),
      borderWidth: Dimensions.n(1),
      color: colors.primaryText,
      padding: Dimensions.n(20),
    },
  });
