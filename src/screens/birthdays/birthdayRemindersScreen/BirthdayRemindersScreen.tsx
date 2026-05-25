import { View, TouchableOpacity, Text } from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import NavBar from '../../../components/navBar/NavBar';
import { RootStackScreenProps } from '../../../navigation/types';
import Plus from '../../../assets/icons/Plus.svg';
import Dimensions from '../../../theme/Dimensions';
import { useTheme } from '../../../context/ThemeProvider';
import { createStyles } from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { gradientColors } from '../../../theme/colors';
import { BIRTHDAY_TABS } from '../../../constants/AppConstants';
import BirthdayTabs from './birthdayTabs/BirthdayTabs';
import ListView from './listView/ListView';
import CalendarView from './calendarView/CalendarView';
import { useTranslation } from 'react-i18next';
import { useBirthdays } from '../../../hooks/queries/useBirthdays';
import Loader from '../../../components/loader/Loader';
import { ROUTES } from '../../../navigation/routes';
import { mmkvStorageService } from '../../../storage/mmkv';
import { STORAGE_CONSTANTS } from '../../../storage/storageConstants';

const BirthdayRemindersScreen = ({
  navigation,
}: RootStackScreenProps<'BirthdayReminders'>) => {
  const { colors } = useTheme();
  const { t } = useTranslation();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const [activeTab, setActiveTab] = useState<BIRTHDAY_TABS>(BIRTHDAY_TABS.LIST);
  const {
    data: birthdays,
    isLoading: isBirthdayLoading,
    error,
    refetch,
    isFetching: isFetchingBirthdays,
  } = useBirthdays();

  const handleNavigationToAddBirthday = () => {
    navigation.navigate(ROUTES.ADD_BIRTHDAY);
  };
  const navbarRightContent = () => {
    return (
      <TouchableOpacity onPress={handleNavigationToAddBirthday}>
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
        return <ListView data={birthdays?.data || []} />;
      case BIRTHDAY_TABS.CALENDAR:
        return <CalendarView />;
    }
  };

  useEffect(() => {
    if (birthdays) {
      mmkvStorageService.setObject(
        STORAGE_CONSTANTS.WIDGET_UPCOMING_BIRTHDAYS,
        birthdays.data,
      );
    }
  }, [birthdays]);

  if (isBirthdayLoading || isFetchingBirthdays) {
    return <Loader />;
  }
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
