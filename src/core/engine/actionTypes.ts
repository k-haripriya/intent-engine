export type Action =
  | { type: 'OPEN_APP'; app: string }
  | { type: 'SEND_MESSAGE'; text: string }
  | { type: 'START_TIMER'; duration: number };
