import { View, Text, TouchableOpacity } from 'react-native';
import React, { FC, ReactNode, useMemo } from 'react';
import { useTheme } from '../../context/ThemeProvider';
import { createStyles } from './styles';
import BackArrow from '../../assets/icons/RightArrow.svg';
import Dimensions from '../../theme/Dimensions';
import { commonStyles } from '../../styles/common';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export type NavBarProps = {
  shouldShowBackArrow?: boolean;
  title?: string;
  subTitle?: string;
  rightContent?: ReactNode;
  handleGoBack?: () => void;
};

const NavBar: FC<NavBarProps> = props => {
  const { shouldShowBackArrow, rightContent, title, subTitle, handleGoBack } =
    props;
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[styles.container, { paddingTop: insets.top + Dimensions.n(10) }]}
    >
      {shouldShowBackArrow && (
        <TouchableOpacity style={styles.backBtn} onPress={handleGoBack}>
          <BackArrow
            height={Dimensions.n(20)}
            width={Dimensions.n(20)}
            style={{ transform: [{ rotate: '180deg' }] }}
            fill={colors.secondary}
          />
        </TouchableOpacity>
      )}
      <View
        style={[
          styles.titleContainer,
          shouldShowBackArrow ? commonStyles.center : commonStyles.flexStart,
        ]}
      >
        {title && (
          <Text
            style={[styles.title, shouldShowBackArrow && styles.textCenter]}
          >
            {title}
          </Text>
        )}
        {subTitle && (
          <Text
            style={[styles.subTitle, shouldShowBackArrow && styles.textCenter]}
          >
            {subTitle}
          </Text>
        )}
      </View>
      {rightContent ? rightContent : <View />}
    </View>
  );
};

export default NavBar;
