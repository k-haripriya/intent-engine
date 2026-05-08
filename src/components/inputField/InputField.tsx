import { View, Text, TextInput } from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import { useTheme } from '../../context/ThemeProvider';
import { createStyles } from './styles';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

interface Props {
  value: string;
  placeholder: string;
  setValue: (value: string) => void;
  placeHolderTextColor?: string;
  label: string;
  isError?: boolean;
  errorText?: string;
}
const InputField: FC<Props> = props => {
  const {
    value,
    placeholder,
    setValue,
    placeHolderTextColor,
    label,
    isError,
    errorText,
  } = props;
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const [isFocused, setIsFocused] = useState(false);
  const progress = useSharedValue(value ? 1 : 0);

  useEffect(() => {
    progress.value = withTiming(value || isFocused ? 1 : 0, {
      duration: 200,
    });
  }, [value, isFocused]);

  const animatedLabelStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: progress.value === 1 ? 0 : 10,
        },
      ],
      fontSize: progress.value === 1 ? 10 : 14,
      opacity: progress.value === 1 ? 1 : 0.6,
    };
  });
  return (
    <View style={styles.inputContainer}>
      {value && (
        <Animated.View style={[styles.labelView, animatedLabelStyle]}>
          <Animated.Text
            style={[styles.label, isError && { color: colors.error }]}
          >
            {label}
          </Animated.Text>
        </Animated.View>
      )}
      <TextInput
        style={[styles.textInput, isError && styles.errorView]}
        placeholderTextColor={placeHolderTextColor || colors.primaryText}
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
      />
      {isError && <Text style={styles.errorText}>* {errorText}</Text>}
    </View>
  );
};

export default InputField;
