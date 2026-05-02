import { View, Text, Button } from 'react-native';
import React, { useMemo } from 'react';
import { createStyles } from './styles';
import { useTheme } from '../../../../context/ThemeProvider';

const HomeScreeen = () => {
  const { colors, toggleTheme } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);
  return <View style={styles.container}></View>;
};

export default HomeScreeen;
