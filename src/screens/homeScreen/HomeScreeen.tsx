import { FlatList, StatusBar, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import { createStyles } from './styles';
import { useTheme } from '../../context/ThemeProvider';
import NavBar from '../../components/navBar/NavBar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SettingsIcon from '../../assets/icons/Settings.svg';
import Dimensions from '../../theme/Dimensions';
import { useTranslation } from 'react-i18next';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { DrawerParamList } from '../../navigation/types';
import { getString } from '../../storage/storage';
import { STORAGE_CONSTANTS } from '../../storage/storageConstants';
import Loader from '../../components/loader/Loader';
import BirthdayIcon from '../../assets/icons/Birthday.svg';
import Cake from '../../assets/icons/Cake.svg';
import Account from '../../assets/icons/Account.svg';
import Doorbell from '../../assets/icons/Doorbell.svg';
import List from '../../assets/icons/list.svg';
import Watch from '../../assets/icons/Watch.svg';
import Task from '../../assets/icons/Task.svg';
import Checklist from '../../assets/icons/Checklist.svg';
import Services from '../../assets/icons/Services.svg';
import Computer from '../../assets/icons/Computer.svg';
import WorkflowIcon from '../../assets/icons/Workflow.svg';
import Schedule from '../../assets/icons/Schedule.svg';
import Calendar from '../../assets/icons/Calendar.svg';
import Team from '../../assets/icons/Team.svg';
import Luggage from '../../assets/icons/Luggage.svg';
import Airplane from '../../assets/icons/Airplane.svg';
import Travel from '../../assets/icons/Travel.svg';
import FeatureCard from './featureCard/FeatureCard';
import { gradientColors } from '../../theme/colors';

type DrawerNav = DrawerNavigationProp<DrawerParamList, 'HomeScreen'>;
export interface CardInfo {
  title: string;
  value: string;
  icon: React.ComponentType<any>;
}

export interface CardItem {
  cardName: string;
  des: string;
  cardInfo: CardInfo[];

  cardBg: string[];

  mainIcon: React.ComponentType<any>;
  bgImage: React.ComponentType<any>;
}

const HomeScreeen = () => {
  const { colors, isDark } = useTheme();
  const navigation = useNavigation<DrawerNav>();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const insets = useSafeAreaInsets();
  const { t } = useTranslation();

  const [isShowLoader, setIsShowLoader] = useState(false);
  const [userName, setUserName] = useState('');
  const cardDetails = useMemo<CardItem[]>(
    () => [
      {
        cardName: t('cards.birthday.title'),
        des: t('cards.birthday.subtitle'),
        cardInfo: [
          {
            title: t('cards.next'),
            value: '2',
            icon: Account,
          },
          {
            title: t('cards.today'),
            value: '1',
            icon: Doorbell,
          },
        ],
        cardBg: gradientColors.birthdayCard,
        mainIcon: BirthdayIcon,
        bgImage: Cake,
      },
      {
        cardName: t('cards.task.title'),
        des: t('cards.task.subtitle'),
        cardInfo: [
          {
            title: t('cards.todo'),
            value: '5',
            icon: List,
          },
          {
            title: t('cards.today'),
            value: '1',
            icon: Watch,
          },
        ],
        cardBg: gradientColors.taskCard,
        mainIcon: Task,
        bgImage: Checklist,
      },
      {
        cardName: t('cards.workflow.title'),
        des: t('cards.workflow.subtitle'),
        cardInfo: [
          {
            title: t('cards.total'),
            value: '5',
            icon: List,
          },
          {
            title: t('cards.active'),
            value: '2',
            icon: Services,
          },
        ],
        cardBg: gradientColors.workflowCard,
        mainIcon: WorkflowIcon,
        bgImage: Computer,
      },
      {
        cardName: t('cards.meeting.title'),
        des: t('cards.meeting.subtitle'),
        cardInfo: [
          {
            title: t('cards.next'),
            value: '5',
            icon: Schedule,
          },
          {
            title: t('cards.today'),
            value: '1',
            icon: Account,
          },
        ],
        cardBg: gradientColors.meetingCard,
        mainIcon: Team,
        bgImage: Calendar,
      },
      {
        cardName: t('cards.travel.title'),
        des: t('cards.travel.subtitle'),
        cardInfo: [
          {
            title: t('cards.trips'),
            value: '5',
            icon: Luggage,
          },
          {
            title: t('cards.today'),
            value: '1',
            icon: Doorbell,
          },
        ],
        cardBg: gradientColors.travelCard,
        mainIcon: Airplane,
        bgImage: Travel,
      },
    ],
    [t],
  );
  useEffect(() => {
    fetchInfoFromLocalStorage();
  }, []);

  const fetchInfoFromLocalStorage = async () => {
    setIsShowLoader(true);
    try {
      const userName = await getString(STORAGE_CONSTANTS.USER_NAME);
      setUserName(userName || '');
      setIsShowLoader(false);
    } catch (error) {
      console.log('error', error);
      setIsShowLoader(false);
    }
  };

  const openDrawer = () => {
    navigation.openDrawer();
  };

  const renderSettingsIcon = () => {
    return (
      <TouchableOpacity onPress={openDrawer}>
        <SettingsIcon
          height={Dimensions.n(20)}
          width={Dimensions.n(20)}
          fill={colors.primaryText}
        />
      </TouchableOpacity>
    );
  };
  if (isShowLoader) {
    return <Loader />;
  }

  return (
    <View
      style={[styles.container, { paddingTop: insets.top + Dimensions.n(10) }]}
    >
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={colors.primary}
      />
      <NavBar
        shouldShowBackArrow={false}
        title={t('home.greeting', { name: userName + '!' })}
        subTitle={t('home.subtitle')}
        rightContent={renderSettingsIcon()}
      />
      <FlatList
        data={cardDetails}
        renderItem={FeatureCard}
        keyExtractor={item => item.cardName}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default HomeScreeen;
