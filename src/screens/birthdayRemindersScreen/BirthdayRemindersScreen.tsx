import { View, TouchableOpacity } from 'react-native';
import React, { useMemo, useState } from 'react';
import NavBar from '../../components/navBar/NavBar';
import { RootStackScreenProps } from '../../navigation/types';
import Plus from '../../assets/icons/Plus.svg';
import Dimensions from '../../theme/Dimensions';
import { useTheme } from '../../context/ThemeProvider';
import { createStyles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { gradientColors } from '../../theme/colors';
import { BIRTHDAY_TABS } from '../../constants/AppConstants';
import BirthdayTabs from './birthdayTabs/BirthdayTabs';
import ListView from './listView/ListView';
import CalendarView from './calendarView/CalendarView';
import { useTranslation } from 'react-i18next';

const BirthdayRemindersScreen = ({
  navigation,
}: RootStackScreenProps<'BirthdayReminders'>) => {
  const { colors } = useTheme();
  const { t } = useTranslation();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const [activeTab, setActiveTab] = useState<BIRTHDAY_TABS>(BIRTHDAY_TABS.LIST);
  const navbarRightContent = () => {
    return (
      <TouchableOpacity onPress={() => {}}>
        <LinearGradient
          colors={gradientColors.birthdayPrimary}
          style={styles.plusButton}
          angle={90}
        >
          <Plus height={Dimensions.n(16)} width={Dimensions.n(16)} />
        </LinearGradient>
      </TouchableOpacity>
    );
  };
  const handleBack = () => {
    navigation.goBack();
  };

  const renderContentBasedOnActiveTab = () => {
    switch (activeTab) {
      case BIRTHDAY_TABS.LIST:
        return <ListView />;
      case BIRTHDAY_TABS.CALENDAR:
        return <CalendarView />;
    }
  };
  return (
    <View style={styles.container}>
      <NavBar
        title={t('birthday.title')}
        subTitle={t('birthday.subtitle')}
        shouldShowBackArrow={true}
        rightContent={navbarRightContent()}
        handleGoBack={handleBack}
      />
      <BirthdayTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderContentBasedOnActiveTab()}
    </View>
  );
};

export default BirthdayRemindersScreen;
