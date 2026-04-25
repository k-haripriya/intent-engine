import React, { useEffect } from 'react';

import { View } from 'react-native';
import { startTriggerEngine } from './src/core/engine/triggerEngine';
import WalkThroughScreen from './src/features/workflow/screens/walkThroughScreen/WalkThroughScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  useEffect(() => {
    startTriggerEngine();
  }, []);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <WalkThroughScreen />
      </View>
    </GestureHandlerRootView>
  );
};

export default App;
