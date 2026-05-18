import { View, Text, TouchableOpacity } from 'react-native';
import React, { FC, useMemo } from 'react';
import { useTheme } from '../../../context/ThemeProvider';
import { createStyles } from './styles';
import { BIRTHDAY_TABS } from '../../../constants/AppConstants';
import List from '../../../assets/icons/list.svg';
import Calendar from '../../../assets/icons/Schedule.svg';
import Dimensions from '../../../theme/Dimensions';
import { useTranslation } from 'react-i18next';

interface Props {
  activeTab: BIRTHDAY_TABS;
  setActiveTab: React.Dispatch<React.SetStateAction<BIRTHDAY_TABS>>;
}
const BirthdayTabs: FC<Props> = props => {
  const { activeTab, setActiveTab } = props;
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const { t } = useTranslation();
  const tabs = [
    {
      name: BIRTHDAY_TABS.LIST,
      icon: List,
      label: t('birthday.listView'),
    },
    {
      name: BIRTHDAY_TABS.CALENDAR,
      icon: Calendar,
      label: t('birthday.calendarView'),
    },
  ];
  const handleTabPress = (tab: BIRTHDAY_TABS) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  return (
    <View style={styles.container}>
      {tabs.map((item, index) => (
        <TouchableOpacity
          style={[
            styles.tabContainer,
            activeTab === item.name && styles.activeTab,
          ]}
          key={index}
          onPress={() => handleTabPress(item.name)}
        >
          <item.icon
            height={Dimensions.n(16)}
            width={Dimensions.n(16)}
            fill={
              activeTab === item.name
                ? colors.birthdayScreen.active
                : colors.secondary
            }
          />

          <Text
            style={[
              styles.tabText,
              activeTab === item.name && styles.activeTabText,
            ]}
          >
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BirthdayTabs;
