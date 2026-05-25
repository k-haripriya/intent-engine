import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import { useTheme } from '../../context/ThemeProvider';
import { createStyles } from './styles';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { KEYBOARD_TYPE } from '../../constants/AppConstants';
import Dimensions from '../../theme/Dimensions';
import { commonStyles } from '../../styles/common';

interface Props {
  value: string;
  placeholder: string;
  setValue: (value: string) => void;
  placeHolderTextColor?: string;
  label: string;
  isError?: boolean;
  errorText?: string;
  keyboardType?: KEYBOARD_TYPE;
  Icon?: React.ComponentType<any>;
  iconFill?: string;
  iconBg?: string;
  isTextArea?: boolean;
  isActionComponent?: boolean;
  handleAction?: () => void;
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
    keyboardType,
    Icon,
    iconFill,
    iconBg,
    isTextArea,
    isActionComponent,
    handleAction,
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
    <TouchableOpacity
      style={[
        styles.inputContainer,
        Icon && styles.iconContainerView,
        isTextArea && commonStyles.flexStart,
      ]}
      disabled={!isActionComponent}
      onPress={() => {
        if (handleAction) {
          handleAction();
        }
      }}
    >
      {value && (
        <Animated.View style={[styles.labelView, animatedLabelStyle]}>
          <Animated.Text
            style={[styles.label, isError && { color: colors.error }]}
          >
            {label}
          </Animated.Text>
        </Animated.View>
      )}
      {Icon && (
        <View
          style={[styles.iconBg, { backgroundColor: iconBg ? iconBg : '' }]}
        >
          <Icon
            width={Dimensions.n(16)}
            height={Dimensions.n(16)}
            fill={iconFill}
          />
        </View>
      )}
      <TextInput
        style={[
          isError && styles.errorView,
          Icon ? styles.iconTextInput : styles.textInput,
          isTextArea && styles.textArea,
        ]}
        placeholderTextColor={placeHolderTextColor || colors.primaryText}
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        keyboardType={keyboardType || 'default'}
        editable={!isActionComponent}
      />
      {isError && <Text style={styles.errorText}>* {errorText}</Text>}
    </TouchableOpacity>
  );
};

export default InputField;
