import { StyleSheet } from 'react-native';
import { commonStyles } from '../../styles/common';
import Dimensions from '../../theme/Dimensions';
import { commonColors } from '../../theme/colors';

export const styles = StyleSheet.create({
  modalView: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    ...commonStyles.flex1,
    ...commonStyles.center,
    padding: Dimensions.n(20),
  },
});
