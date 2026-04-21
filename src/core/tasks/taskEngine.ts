import { loadTasks, saveTasks } from './taskStorage';
import { shouldTriggerTask } from './taskEvaluator';
import { triggerTask } from './taskDispatcher';

export const startTaskEngine = () => {
  setInterval(async () => {
    const tasks = await loadTasks();

    let updatedTasks = [...tasks];

    for (let task of updatedTasks) {
      if (shouldTriggerTask(task)) {
        triggerTask(task);

        task.lastTriggeredAt = Date.now();
        task.isCompleted = false;
      }
    }

    await saveTasks(updatedTasks);
  }, 60000);
};
