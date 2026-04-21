import { Linking } from 'react-native';
import { Action } from './actionTypes';

export const executeAction = async (action: Action) => {
  switch (action.type) {
    case 'OPEN_APP':
      try {
        await Linking.openURL(`${action.app}://`);
      } catch (e) {
        console.log('App not installed');
      }
      break;

    case 'SEND_MESSAGE':
      try {
        await Linking.openURL(
          `whatsapp://send?text=${encodeURIComponent(action.text)}`,
        );
      } catch (e) {
        console.log('WhatsApp not available');
      }
      break;

    case 'START_TIMER':
      console.log(`Timer started for ${action.duration} seconds`);
      break;

    default:
      console.log('Unknown action type');
  }
};
