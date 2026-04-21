import { Task } from './taskTypes';

export const triggerTask = (task: Task) => {
  console.log('🔔 Reminder:', task.name);

  // For now → console
  // Later → notification / UI / widget
};
