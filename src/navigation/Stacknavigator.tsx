import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import { ROUTES } from './routes';
import { NavigationContainer } from '@react-navigation/native';
import WalkthroughScreen from '../screens/walkThroughScreen/WalkThroughScreen';
import HomeScreeen from '../screens/homeScreen/HomeScreeen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'fade',
        }}
        initialRouteName={ROUTES.HOME}
      >
        <Stack.Screen name={ROUTES.WALKTHROUGH} component={WalkthroughScreen} />
        <Stack.Screen name={ROUTES.HOME} component={HomeScreeen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
