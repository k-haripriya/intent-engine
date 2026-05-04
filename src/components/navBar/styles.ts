import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../theme/colors';
import { SPACING } from '../../theme/spacing';
import Dimensions from '../../theme/Dimensions';
import { commonStyles } from '../../styles/common';

export const createStyles = (Colors: ThemeColors) =>
  StyleSheet.create({
    backBtn: {
      width: Dimensions.n(40),
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
      fontSize: Dimensions.n(12),
      marginTop: Dimensions.nn(5),
      width: Dimensions.n(250),
    },
    title: {
      color: Colors.primaryText,
      fontSize: Dimensions.n(18),
      fontWeight: 'bold',
    },
  });
