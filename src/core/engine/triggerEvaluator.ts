import { Trigger } from './triggerTypes';

export const isTriggerMatched = (trigger: Trigger) => {
  const now = new Date();

  switch (trigger.type) {
    case 'MANUAL':
      return false;

    case 'TIME':
      const currentTime = now.toTimeString().slice(0, 5);
      return currentTime === trigger.value;

    default:
      return false;
  }
};
