import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex1: { flex: 1 },
  flexRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  flexStart: { alignItems: 'flex-start' },
  rowBetween: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
