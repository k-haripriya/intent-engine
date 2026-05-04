import React, { useEffect } from 'react';
import { startTriggerEngine } from './src/core/engine/triggerEngine';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RootNavigator from './src/navigation/Stacknavigator';
import { ThemeProvider } from './src/context/ThemeProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { commonStyles } from './src/styles/common';

const App = () => {
  useEffect(() => {
    startTriggerEngine();
  }, []);
  return (
    <GestureHandlerRootView style={commonStyles.flex1}>
      <SafeAreaProvider>
        <ThemeProvider>
          <RootNavigator />
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
