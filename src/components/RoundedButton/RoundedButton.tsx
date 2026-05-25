import {
  ActivityIndicator,
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
  isLoading?: boolean;
}
const RoundedButton: FC<Props> = props => {
  const { title, onPress, style, textStyle, isLoading } = props;
  const { colors } = useTheme();
  const styles = createStyles(colors);
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator size="small" color={colors.primary} />
      ) : (
        <Text style={[styles.btnTitle, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default RoundedButton;
