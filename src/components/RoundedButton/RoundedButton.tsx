import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React, { FC } from 'react';
import { useTheme } from '../../context/ThemeProvider';
import { createStyles } from './styles';

interface Props {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}
const RoundedButton: FC<Props> = props => {
  const { title, onPress, style, textStyle } = props;
  const { colors } = useTheme();
  const styles = createStyles(colors);
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={[styles.btnTitle, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default RoundedButton;
