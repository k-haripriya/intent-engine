export type Task = {
  id: string;
  name: string;

  schedule: {
    type: 'DAILY' | 'INTERVAL';
    time?: string; // "09:00"
    intervalMinutes?: number;
  };

  lastTriggeredAt?: number;
  lastCompletedAt?: number;

  isCompleted?: boolean;
};
