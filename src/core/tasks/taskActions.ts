import { loadTasks, saveTasks } from './taskStorage';

export const completeTask = async (taskId: string) => {
  const tasks = await loadTasks();

  const updated = tasks.map(task => {
    if (task.id === taskId) {
      return {
        ...task,
        isCompleted: true,
        lastCompletedAt: Date.now(),
      };
    }
    return task;
  });

  await saveTasks(updated);
};
