export type Condition =
  | { type: 'DAY'; value: 'WEEKDAY' | 'WEEKEND' }
  | { type: 'TIME_RANGE'; start: string; end: string };
