import { workflows } from '../../data/workflows';
import { isTriggerMatched } from './triggerEvaluator';
import { runWorkflow } from './workFlowEngine';

const executedToday = new Set<string>();

export const startTriggerEngine = () => {
  setInterval(() => {
    const now = new Date().toDateString();

    workflows.forEach(workflow => {
      const key = `${workflow.id}-${now}`;

      if (isTriggerMatched(workflow.trigger) && !executedToday.has(key)) {
        executedToday.add(key);

        console.log('Running workflow:', workflow.name);
        runWorkflow(workflow);
      }
    });
  }, 30000);
};
