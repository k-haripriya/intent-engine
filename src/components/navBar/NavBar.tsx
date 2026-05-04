import { View, Text, TouchableOpacity } from 'react-native';
import React, { FC, ReactNode, useMemo } from 'react';
import { useTheme } from '../../context/ThemeProvider';
import { createStyles } from './styles';
import BackArrow from '../../assets/icons/BackArrow.svg';
import Dimensions from '../../theme/Dimensions';
import { commonStyles } from '../../styles/common';

export type NavBarProps = {
  shouldShowBackArrow?: boolean;
  title?: string;
  subTitle?: string;
  rightContent?: ReactNode;
};

const NavBar: FC<NavBarProps> = props => {
  const { shouldShowBackArrow, rightContent, title, subTitle } = props;
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);
  return (
    <View style={styles.container}>
      {shouldShowBackArrow && (
        <TouchableOpacity style={styles.backBtn}>
          <BackArrow
            height={Dimensions.n(25)}
            width={Dimensions.n(25)}
            fill={colors.primaryText}
          />
        </TouchableOpacity>
      )}
      <View
        style={
          shouldShowBackArrow ? commonStyles.center : commonStyles.flexStart
        }
      >
        {title && <Text style={styles.title}>{title}</Text>}
        {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
      </View>
      {rightContent}
    </View>
  );
};

export default NavBar;
