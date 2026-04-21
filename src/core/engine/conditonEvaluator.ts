import { Condition } from './condtionTypes';

export const evaluateConditions = (conditions?: Condition[]) => {
  if (!conditions) return true;

  const now = new Date();

  return conditions.every(condition => {
    switch (condition.type) {
      case 'DAY':
        const day = now.getDay();
        const isWeekend = day === 0 || day === 6;

        return condition.value === 'WEEKEND' ? isWeekend : !isWeekend;

      case 'TIME_RANGE':
        const currentTime = now.toTimeString().slice(0, 5);
        return currentTime >= condition.start && currentTime <= condition.end;

      default:
        return true;
    }
  });
};
