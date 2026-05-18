export const lightColors = {
  primary: '#f7f7f7',
  borderColor: '#cfcfcf',
  primaryText: '#1b1b1b',
  themeToggle: '#7d7d7d',
  themeToggleBackground: '#e0e0e0',
  secondary: '#1b1b1b',
  error: '#ff5f5f',
  button: '#1b1b1b',
  logo: '#a00000',
  birthdayScreen: {
    active: '#ff4d8d',
    activeOverlay: '#ff4d8d1a',
    cardOverlay: '#ff4d8d10',
    borderColor: '#ddddddc9',
    cardBg: '#f7f7f7',
    divider: '#dbdbdb8f',
  },
  bgColor: '#e3e2e22e',
  secondaryText: '#7d7d7d',
  blurbg: 'rgba(108, 108, 108, 0.11)',
};
export const darkColors = {
  primary: '#1b1b1b',
  borderColor: '#3d3d3d',
  primaryText: '#f3f3f3',
  themeToggle: '#1fe41c',
  themeToggleBackground: '#ddffbf',
  secondary: '#f7f7f7',
  error: '#ff5f5f',
  button: '#f7f7f7',
  logo: '#a00000',
  birthdayScreen: {
    active: '#ff4d8d',
    activeOverlay: '#ff4d8d1a',
    cardOverlay: '#ff4d8d1a',
    borderColor: '#ff4d8e40',
    cardBg: '#242424',
  },
  bgColor: '#1b1b1b',
  secondaryText: '#a1a1aa',
  blurbg: 'rgba(255,255,255,0.3)',
};

export const commonColors = {
  white: '#fff',
  whitebg: 'rgba(255,255,255,0.3)',
};

export const gradientColors = {
  birthdayCard: ['#FF6B8A', '#FF8E53'],
  taskCard: ['#4A90E2', '#357ABD'],
  workflowCard: ['#2ECC71', '#00C9A7'],
  meetingCard: ['#7F7FD5', '#86A8E7'],
  travelCard: ['#FFD200', '#F7971E'],
  birthdayPrimary: ['#ff4d8d', '#ff8fb3'],
};

export const birthdayCardColors = [
  {
    statusText: '#FF4D8D',
    buttonBg: '#ff4d8e2c',
  },
  {
    statusText: '#8B5CF6',
    buttonBg: '#8a5cf621',
  },
  {
    statusText: '#3B82F6',
    buttonBg: '#3b83f62a',
  },
  {
    statusText: '#22C55E',
    buttonBg: '#22c55e1c',
  },
  {
    statusText: '#F97316',
    buttonBg: '#f9741629',
  },
];

export type ThemeColors = typeof lightColors;
