import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../theme/colors';
import { commonStyles } from '../../styles/common';
import Dimensions from '../../theme/Dimensions';

export const createStyles = (Colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      ...commonStyles.flex1,
      backgroundColor: Colors.primary,
    },
    drawerContainer: {
      width: Dimensions.n(250),
    },
    label: {
      color: Colors.primaryText,
      fontSize: Dimensions.n(12),
    },
    marginTop20: {
      marginTop: Dimensions.n(20),
    },
    padding20: {
      padding: Dimensions.n(20),
    },
    title: {
      color: Colors.primaryText,
      fontSize: Dimensions.n(18),
      fontWeight: 'bold',
      marginBottom: Dimensions.n(15),
    },
  });
