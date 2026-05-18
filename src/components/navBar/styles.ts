import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../theme/colors';
import { SPACING } from '../../theme/spacing';
import Dimensions from '../../theme/Dimensions';
import { commonStyles } from '../../styles/common';
import FontStyles from '../../styles/fontStyles';

export const createStyles = (Colors: ThemeColors) =>
  StyleSheet.create({
    backBtn: {
      backgroundColor: Colors.blurbg,
      padding: Dimensions.n(4),
      borderRadius: Dimensions.n(8),
    },
    container: {
      backgroundColor: Colors.primary,
      borderBottomColor: Colors.borderColor,
      borderBottomWidth: Dimensions.n(1),
      padding: SPACING.MD,
      paddingTop: Dimensions.nn(0),
      ...commonStyles.rowBetween,
    },
    subTitle: {
      color: Colors.primaryText,
      marginTop: Dimensions.nn(5),
      ...FontStyles.montserratM10,
    },
    title: {
      color: Colors.primaryText,
      ...FontStyles.CourgetteR16,
    },
    titleContainer: {
      maxWidth: Dimensions.nn(200),
    },
    textCenter: {
      textAlign: 'center',
    },
  });
