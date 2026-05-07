import { StyleSheet } from 'react-native';
import { ThemeColors } from '../../theme/colors';
import { commonStyles } from '../../styles/common';
import Dimensions from '../../theme/Dimensions';
import FontStyles from '../../styles/fontStyles';

export const createStyles = (Colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      ...commonStyles.flex1,
      backgroundColor: Colors.primary,
    },
    dot: {
      backgroundColor: Colors.primaryText,
      borderRadius: Dimensions.n(10),
      height: Dimensions.n(8),
      width: Dimensions.n(8),
    },
    drawerContainer: {
      width: Dimensions.n(300),
    },
    drawerItem: {
      ...commonStyles.rowBetween,
      alignItems: 'center',
      marginBottom: Dimensions.n(15),
    },
    drawerItemSubText: {
      color: Colors.primaryText,
      marginLeft: Dimensions.n(10),
      ...FontStyles.montserratM10,
      width: Dimensions.n(100),
    },
    drawerItemText: {
      color: Colors.primaryText,
      ...FontStyles.montserratSB12,
      marginLeft: Dimensions.n(10),
    },

    label: {
      color: Colors.primaryText,
    },
    marginRightnegative: {
      marginRight: Dimensions.n(-6),
    },
    marginTop20: {
      marginTop: Dimensions.n(20),
    },
    padding20: {
      padding: Dimensions.n(20),
    },
    radioBtn: {
      borderColor: Colors.primaryText,
      borderRadius: Dimensions.n(20),
      borderWidth: Dimensions.n(1),
      ...commonStyles.center,
      height: Dimensions.n(15),
      padding: Dimensions.n(3),
      width: Dimensions.n(15),
    },
    subTitle: {
      color: Colors.primaryText,
      marginBottom: Dimensions.n(25),
      ...FontStyles.montserratM10,
    },
    title: {
      color: Colors.primaryText,
      ...FontStyles.montserratB14,
      marginBottom: Dimensions.n(5),
    },
    toggleBtn: {
      backgroundColor: Colors.themeToggle,
      borderRadius: Dimensions.n(20),
      height: Dimensions.n(20),
      width: Dimensions.n(20),
    },
    toggleText: {
      color: Colors.primaryText,
      ...FontStyles.montserratM10,
      marginTop: Dimensions.n(5),
    },
    toggleView: {
      alignItems: 'center',
      backgroundColor: Colors.themeToggleBackground,
      borderRadius: Dimensions.n(20),
      flexDirection: 'row',
      width: Dimensions.n(40),
    },
  });
