import React, { useEffect } from 'react';
import { startTriggerEngine } from './src/core/engine/triggerEngine';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RootNavigator from './src/navigation/Stacknavigator';
import { ThemeProvider } from './src/context/ThemeProvider';

const App = () => {
  useEffect(() => {
    startTriggerEngine();
  }, []);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider>
        <RootNavigator />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

export default App;
