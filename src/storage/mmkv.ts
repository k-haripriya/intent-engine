import { createMMKV } from 'react-native-mmkv';

export const storage = createMMKV();

export const mmkvStorageService = {
  setString: (key: string, value: string) => {
    storage.set(key, value);
  },

  getString: (key: string) => {
    return storage.getString(key);
  },

  setObject: (key: string, value: unknown) => {
    storage.set(key, JSON.stringify(value));
  },

  getObject: <T>(key: string): T | null => {
    const value = storage.getString(key);

    if (!value) {
      return null;
    }

    return JSON.parse(value) as T;
  },

  remove: (key: string) => {
    storage.remove(key);
  },
};
