import { View, Text, Modal } from 'react-native';
import React, { FC } from 'react';
import { styles } from './styles';

interface Props {
  children: React.ReactNode;
}
const CModal: FC<Props> = props => {
  const { children } = props;
  return (
    <Modal transparent animationType="slide">
      <View style={styles.modalView}>{children}</View>
    </Modal>
  );
};

export default CModal;
