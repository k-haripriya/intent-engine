import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, { useMemo } from 'react';
import Confetti from '../../../assets/icons/confetti.svg';
import Dimensions from '../../../theme/Dimensions';
import { useTheme } from '../../../context/ThemeProvider';
import { createStyles } from './styles';
import Cake from '../../../assets/icons/Cake.svg';
import RoundedButton from '../../../components/RoundedButton/RoundedButton';
import { commonStyles } from '../../../styles/common';
import BirthdayCard from '../birthdayCard/BirthdayCard';
import { useTranslation } from 'react-i18next';

export interface UpcomingBirthday {
  name: string;
  relationship: string;
  contact: string;
  image: string;
  remainingdays: number;
  notes: string;
  birthday: string;
}
const upcomingBirthdays: UpcomingBirthday[] = [
  {
    name: 'Mom',
    relationship: 'Mother',
    contact: '+91 9876543210',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    remainingdays: 0,
    notes: 'Call her in the evening',
    birthday: '1975-08-12',
  },
  {
    name: 'Arjun',
    relationship: 'Best Friend',
    contact: '+91 9123456780',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    remainingdays: 5,
    notes: 'Planning a surprise party',
    birthday: '1998-11-02',
  },
  {
    name: 'Priya',
    relationship: 'Sister',
    contact: '+91 9988776655',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    remainingdays: 21,
    notes: 'Gift idea: smartwatch',
    birthday: '2001-03-19',
  },
  {
    name: 'Karthik',
    relationship: 'Colleague',
    contact: '+91 9090909090',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    remainingdays: 2,
    notes: 'Team lunch this weekend',
    birthday: '1995-06-25',
  },
  {
    name: 'Grandpa',
    relationship: 'Grandfather',
    contact: '+91 9345678123',
    image: 'https://randomuser.me/api/portraits/men/12.jpg',
    remainingdays: 30,
    notes: 'Visit hometown',
    birthday: '1948-01-09',
  },
  {
    name: 'Ananya',
    relationship: 'Cousin',
    contact: '+91 9781234567',
    image: 'https://randomuser.me/api/portraits/women/25.jpg',
    remainingdays: 9,
    notes: 'Send birthday card',
    birthday: '2003-12-14',
  },
];

const ListView = () => {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const { t } = useTranslation();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.cardContainer}>
        <View style={styles.gap16}>
          <View>
            <Text style={styles.title}>{t('birthday.todaybday')}</Text>
            <Text style={styles.subTitle}>{t('birthday.extraspl')}</Text>
          </View>
          <RoundedButton
            title={t('birthday.sendwish')}
            onPress={() => {}}
            style={styles.btn}
            textStyle={styles.btnText}
          />
        </View>
        <View>
          <Cake
            width={Dimensions.n(120)}
            height={Dimensions.n(120)}
            style={styles.cake}
          />
          <Confetti width={Dimensions.n(130)} height={Dimensions.n(130)} />
        </View>
        <View style={styles.countView}>
          <Text style={styles.countText}>1</Text>
          <Text style={styles.countDes}>
            {t('common.today')?.toUpperCase()}
          </Text>
        </View>
      </View>
      <View style={styles.upcomingSection}>
        <View style={commonStyles.rowBetween}>
          <Text style={styles.upcomingTitle}>{t('birthday.upcoming')}</Text>
          <TouchableOpacity>
            <Text style={styles.sortText}>Sort</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={upcomingBirthdays}
          renderItem={({ item, index }) => (
            <BirthdayCard item={item} index={index} />
          )}
          keyExtractor={item => item.name}
          scrollEnabled={false}
        />
      </View>
    </ScrollView>
  );
};

export default ListView;
