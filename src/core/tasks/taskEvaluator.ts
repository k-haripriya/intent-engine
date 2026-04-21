import { Task } from './taskTypes';

const isSameMinute = (t1: number, t2: number) => {
  const d1 = new Date(t1);
  const d2 = new Date(t2);

  return d1.getHours() === d2.getHours() && d1.getMinutes() === d2.getMinutes();
};

export const shouldTriggerTask = (task: Task) => {
  const now = Date.now();

  // DAILY
  if (task.schedule.type === 'DAILY') {
    const currentTime = new Date().toTimeString().slice(0, 5);

    if (currentTime === task.schedule.time) {
      if (task.lastTriggeredAt && isSameMinute(task.lastTriggeredAt, now)) {
        return false;
      }

      return !task.isCompleted;
    }
  }

  // INTERVAL
  if (task.schedule.type === 'INTERVAL') {
    if (!task.lastTriggeredAt) return true;

    const diff = (now - task.lastTriggeredAt) / (1000 * 60);

    return diff >= (task.schedule.intervalMinutes || 0);
  }

  return false;
};
