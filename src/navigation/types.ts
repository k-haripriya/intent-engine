import { StackScreenProps } from '@react-navigation/stack';
export type RootStackParamList = {
  Walkthrough: undefined;
  HomeDrawer: undefined;
  Login: undefined;
  BirthdayReminders: undefined;
};

export type DrawerParamList = {
  HomeScreen: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;
