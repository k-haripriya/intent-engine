/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { registerWidgetTaskHandler } from 'react-native-android-widget';
import { widgetTaskHandler } from './src/widgets/WidgetTaskHandler';

registerWidgetTaskHandler(widgetTaskHandler);
console.log('Handler:', widgetTaskHandler);
AppRegistry.registerComponent(appName, () => App);
