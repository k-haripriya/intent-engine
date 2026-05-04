import { TouchableOpacity, View } from 'react-native';
import React, { useMemo } from 'react';
import { createStyles } from './styles';
import { useTheme } from '../../context/ThemeProvider';
import NavBar from '../../components/navBar/NavBar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SettingsIcon from '../../assets/icons/Settings.svg';
import Dimensions from '../../theme/Dimensions';

const HomeScreeen = () => {
  const { colors, toggleTheme } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const insets = useSafeAreaInsets();

  const renderSettingsIcon = () => {
    return (
      <TouchableOpacity onPress={toggleTheme}>
        <SettingsIcon
          height={Dimensions.n(20)}
          width={Dimensions.n(20)}
          fill={colors.primaryText}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <NavBar
        shouldShowBackArrow={false}
        title="Hi Haripriya"
        subTitle="Welcome to Dynamo"
        rightContent={renderSettingsIcon()}
      />
    </View>
  );
};

export default HomeScreeen;
