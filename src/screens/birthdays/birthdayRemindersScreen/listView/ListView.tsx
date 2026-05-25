import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, { FC, useMemo } from 'react';
import Confetti from '../../../../assets/icons/confetti.svg';
import Dimensions from '../../../../theme/Dimensions';
import { useTheme } from '../../../../context/ThemeProvider';
import { createStyles } from './styles';
import Cake from '../../../../assets/icons/Cake.svg';
import RoundedButton from '../../../../components/RoundedButton/RoundedButton';
import { commonStyles } from '../../../../styles/common';
import BirthdayCard from '../birthdayCard/BirthdayCard';
import { useTranslation } from 'react-i18next';
import { BirthdayData } from '../../../../api/responseTypes';

interface Props {
  data: BirthdayData[];
}

const ListView: FC<Props> = props => {
  const { data } = props;
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
          data={data}
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
