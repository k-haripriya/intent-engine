import { Text, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';
import { useTheme } from '../../context/ThemeProvider';
import { createStyles } from './styles';

interface Props {
  title: string;
  onPress: () => void;
}
const RoundedButton: FC<Props> = props => {
  const { title, onPress } = props;
  const { colors } = useTheme();
  const styles = createStyles(colors);
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.btnTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default RoundedButton;
