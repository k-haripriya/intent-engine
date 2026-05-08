import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../theme/colors';
import Dimensions from '../../theme/Dimensions';
import FontStyles from '../../styles/fontStyles';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    btnTitle: {
      color: colors.primary,
      ...FontStyles.montserratSB12,
    },
    container: {
      alignItems: 'center',
      backgroundColor: colors.button,
      borderRadius: Dimensions.n(30),
      justifyContent: 'center',

      padding: Dimensions.n(10),
    },
  });
