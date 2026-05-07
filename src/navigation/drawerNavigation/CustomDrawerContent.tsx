import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { useTheme } from '../../context/ThemeProvider';
import { createStyles } from './styles';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { SETTINGS_KEY } from '../../constants/AppConstants';
import Dimensions from '../../theme/Dimensions';
import ThemeIcon from '../../assets/icons/Theme.svg';
import LanguageIcon from '../../assets/icons/Language.svg';
import DownArrowIcon from '../../assets/icons/DownArrow.svg';
import { commonStyles } from '../../styles/common';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const { toggleTheme, colors, isDark } = useTheme();
  const { t } = useTranslation();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const toggleX = useSharedValue(isDark ? 1 : 0);
  const TOGGLE_WIDTH = Dimensions.n(40);
  const KNOB_SIZE = Dimensions.n(20);

  const [isLanguagesOpen, setIsLanguagesOpen] = useState(false);

  const maxTranslate = TOGGLE_WIDTH - KNOB_SIZE;

  const drawerOptions = [SETTINGS_KEY.THEME, SETTINGS_KEY.LANGUAGE];
  const languages = [
    {
      code: 'en',
      name: t('language.english'),
    },
    {
      code: 'ta',
      name: t('language.tamil'),
    },
    {
      code: 'hi',
      name: t('language.hindi'),
    },
  ];

  useEffect(() => {
    toggleX.value = withSpring(isDark ? 1 : 0);
  }, [isDark]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: toggleX.value * maxTranslate,
        },
      ],
    };
  });

  const handleLanguages = () => {
    setIsLanguagesOpen(prev => !prev);
  };

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
  };

  const renderItem = (item: string) => {
    switch (item) {
      case SETTINGS_KEY.THEME:
        return (
          <View style={styles.drawerItem}>
            <View style={[commonStyles.flexRow, commonStyles.flexStart]}>
              <ThemeIcon
                height={Dimensions.n(15)}
                width={Dimensions.n(15)}
                color={colors.primaryText}
              />
              <View>
                <Text style={styles.drawerItemText}>
                  {t(`settings.${item}`)}
                </Text>
                <Text style={styles.drawerItemSubText}>
                  {t(`settings.themeSubtitle`)}
                </Text>
              </View>
            </View>
            <View style={commonStyles.center}>
              <TouchableOpacity style={styles.toggleView} onPress={toggleTheme}>
                <Animated.View style={[styles.toggleBtn, animatedStyle]} />
              </TouchableOpacity>
              <Text style={styles.toggleText}>
                {isDark ? t('settings.dark') : t('settings.light')}
              </Text>
            </View>
          </View>
        );
      case SETTINGS_KEY.LANGUAGE:
        return (
          <View>
            <TouchableOpacity
              onPress={() => handleLanguages()}
              style={styles.drawerItem}
            >
              <View style={commonStyles.flexRow}>
                <LanguageIcon
                  height={Dimensions.n(18)}
                  width={Dimensions.n(18)}
                  fill={colors.primaryText}
                />
                <Text style={styles.drawerItemText}>
                  {t(`settings.${item}`)}
                </Text>
              </View>
              <DownArrowIcon
                height={Dimensions.n(30)}
                width={Dimensions.n(30)}
                fill={colors.primaryText}
                style={[
                  {
                    transform: [
                      {
                        rotate: isLanguagesOpen ? '180deg' : '0deg',
                      },
                    ],
                  },
                  styles.marginRightnegative,
                ]}
              />
            </TouchableOpacity>
            {isLanguagesOpen &&
              languages.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleLanguageChange(item.code)}
                  style={styles.drawerItem}
                >
                  <Text style={styles.drawerItemText}>{item.name}</Text>
                  <View style={styles.radioBtn}>
                    <View style={i18n.language === item.code && styles.dot} />
                  </View>
                </TouchableOpacity>
              ))}
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <View style={styles.padding20}>
        <Text style={styles.title}>{t('settings.title', 'Settings')}</Text>
        <Text style={styles.subTitle}>{t('settings.subtitle')}</Text>
        {drawerOptions.map((item, index) => (
          <View key={index}>{renderItem(item)}</View>
        ))}
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
