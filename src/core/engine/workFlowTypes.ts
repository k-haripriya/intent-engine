import { Action } from './actionTypes';
import { Trigger } from './triggerTypes';
import { Condition } from './condtionTypes';

export interface Workflow {
  id: string;
  name: string;
  trigger: Trigger;
  conditions?: Condition[];
  actions: Action[];
}
