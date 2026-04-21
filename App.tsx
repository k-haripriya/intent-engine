import React, { useEffect } from 'react';
import { runWorkflow } from './src/core/engine/workFlowEngine';
import { workflows } from './src/data/workflows';
import { Button, View } from 'react-native';
import { startTriggerEngine } from './src/core/engine/triggerEngine';

const App = () => {
  useEffect(() => {
    startTriggerEngine();
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Run Focus Mode"
        onPress={() => runWorkflow(workflows[0])}
      />
    </View>
  );
};

export default App;
