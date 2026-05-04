import React, { useMemo } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreeen from '../../screens/homeScreen/HomeScreeen';
import CustomDrawerContent from './CustomDrawerContent';
import { useTheme } from '../../context/ThemeProvider';
import { createStyles } from './styles';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
        drawerStyle: styles.drawerContainer,
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
      initialRouteName="HomeScreen"
    >
      <Drawer.Screen name="HomeScreen" component={HomeScreeen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
