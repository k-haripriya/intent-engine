import { StyleSheet } from 'react-native';
import { commonColors, ThemeColors } from '../../../../theme/colors';
import Dimensions from '../../../../theme/Dimensions';
import { SPACING } from '../../../../theme/spacing';
import { commonStyles } from '../../../../styles/common';
import FontStyles from '../../../../styles/fontStyles';

export const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    calendarContainer: {
      borderWidth: Dimensions.n(1),
      borderColor: colors.borderColor,
      marginHorizontal: SPACING.MD,
      borderRadius: Dimensions.n(12),
      overflow: 'hidden',
    },
    calendarArrowContainer: {
      borderWidth: Dimensions.n(1),
      borderColor: colors.borderColor,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: Dimensions.n(12),
      paddingVertical: Dimensions.n(2),
      borderRadius: Dimensions.n(20),
    },
    arrow: {
      color: colors.primaryText,
      ...FontStyles.montserratB16,
    },
    container: {
      marginHorizontal: SPACING.MD,
      marginTop: SPACING.MD,
    },
    emptyContainer: {
      ...commonStyles.flex1,
      ...commonStyles.center,
      minHeight: Dimensions.n(200),
    },
    emptyText: {
      ...FontStyles.montserratB14,
      color: colors.primaryText,
    },
    contentContainerStyle: {
      paddingBottom: Dimensions.n(500),
    },
    monthName: {
      ...FontStyles.montserratB14,
      color: colors.primaryText,
      marginVertical: SPACING.MD,
    },
    calendarBg: {
      borderRadius: Dimensions.n(20),
      padding: Dimensions.n(5),
      paddingHorizontal: Dimensions.n(8),
      alignItems: 'center',
    },
    dateText: {
      color: commonColors.white,
    },
    dot: {
      width: Dimensions.n(4),
      height: Dimensions.n(4),
      borderRadius: Dimensions.n(2),
      marginHorizontal: Dimensions.n(1),
    },
    dotContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
