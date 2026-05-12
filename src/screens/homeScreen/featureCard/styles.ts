import { StyleSheet } from 'react-native';
import { commonStyles } from '../../../styles/common';
import Dimensions from '../../../theme/Dimensions';
import { commonColors } from '../../../theme/colors';
import FontStyles from '../../../styles/fontStyles';

export const styles = StyleSheet.create({
  cardContainer: {
    width: Dimensions.SCREEN_WIDTH / 2 - 10,
    padding: Dimensions.n(10),
    borderRadius: Dimensions.n(10),
  },
  marginHorizontal: {
    marginHorizontal: Dimensions.n(5),
    borderRadius: Dimensions.n(10),
  },
  headerView: {
    ...commonStyles.flexRow,
    ...commonStyles.rowBetween,
  },
  itemIconContainer: {
    backgroundColor: commonColors.white,
    alignSelf: 'flex-start',
    padding: Dimensions.n(4),
    borderRadius: Dimensions.n(15),
  },
  arrowView: {
    backgroundColor: commonColors.whitebg,
    padding: Dimensions.n(4),
    borderRadius: Dimensions.n(6),
  },
  detailsView: {
    ...commonStyles.flexRow,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Dimensions.n(10),
    gap: Dimensions.n(5),
  },
  cardDetailsView: {
    width: Dimensions.n(100),
  },
  title: {
    ...FontStyles.montserratSB12,
    color: commonColors.white,
  },
  des: {
    ...FontStyles.montserratM10,
    color: commonColors.white,
    lineHeight: Dimensions.n(14),
    marginTop: Dimensions.n(5),
  },
  infoView: {
    backgroundColor: commonColors.whitebg,
    padding: Dimensions.n(10),
    borderRadius: Dimensions.n(10),
    marginBottom: Dimensions.n(10),
    ...commonStyles.flexRow,
    ...commonStyles.center,
    gap: Dimensions.n(10),
    marginTop: Dimensions.n(16),
    marginHorizontal: Dimensions.n(-3),
  },
  infoSection: {
    flex: 1,
    ...commonStyles.flexRow,
    gap: Dimensions.n(5),
  },
  infoText: {
    ...FontStyles.montserratM8,
    color: commonColors.white,
    width: Dimensions.n(45),
    marginTop: Dimensions.n(-3),
  },
  infoValue: {
    ...FontStyles.montserratB10,
    color: commonColors.white,
  },
  infoDetailView: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  borderRIght: {
    borderRightColor: commonColors.white,
    borderRightWidth: Dimensions.n(1),
    paddingRight: Dimensions.n(5),
  },
});
