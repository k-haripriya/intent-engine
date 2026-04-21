import { Workflow } from './workflowTypes';
import { executeAction } from './actionExecutor';
import { evaluateConditions } from './conditonEvaluator';

export const runWorkflow = async (workflow: Workflow) => {
  const canRun = evaluateConditions(workflow.conditions);

  if (!canRun) {
    console.log('Conditions not met');
    return;
  }

  for (const action of workflow.actions) {
    await executeAction(action);
  }
};
