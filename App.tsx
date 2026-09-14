import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RootNavigator from './src/navigation/Stacknavigator';
import { ThemeProvider } from './src/context/ThemeProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { commonStyles } from './src/styles/common';
import './src/localization/i18n';
import './src/api';
import QueryProvider from './src/context/QueryProvider';

const App = () => {
  return (
    <GestureHandlerRootView style={commonStyles.flex1}>
      <QueryProvider>
        <SafeAreaProvider>
          <ThemeProvider>
            <RootNavigator />
          </ThemeProvider>
        </SafeAreaProvider>
      </QueryProvider>
    </GestureHandlerRootView>
  );
};

export default App;
