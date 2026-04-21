import { Workflow } from '../core/engine/workflowTypes';

export const workflows: Workflow[] = [
  {
    id: 'focus_mode',
    name: 'Focus Mode',
    trigger: { type: 'MANUAL' },
    conditions: [
      { type: 'DAY', value: 'WEEKDAY' },
      { type: 'TIME_RANGE', start: '09:00', end: '24:00' },
    ],
    actions: [
      { type: 'START_TIMER', duration: 1500 },
      { type: 'OPEN_APP', app: 'spotify' },
    ],
  },
  {
    id: 'time_mode',
    name: 'TIME_MODE',
    trigger: { type: 'TIME', value: '12:53' },
    actions: [
      { type: 'START_TIMER', duration: 1500 },
      { type: 'OPEN_APP', app: 'youtube' },
    ],
  },
];
