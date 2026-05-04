import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { useTheme } from '../../context/ThemeProvider';
import { createStyles } from './styles';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const { toggleTheme, colors } = useTheme();
  const { t } = useTranslation();
  const styles = useMemo(() => createStyles(colors), [colors]);

  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <View style={styles.padding20}>
        <Text style={styles.title}>{t('settings.title', 'Settings')}</Text>

        <TouchableOpacity onPress={toggleTheme}>
          <Text style={styles.label}>🌙 Toggle Theme</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            i18n.changeLanguage(i18n.language === 'en' ? 'ta' : 'en')
          }
          style={styles.marginTop20}
        >
          <Text style={styles.label}>🌐 Change Language</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
