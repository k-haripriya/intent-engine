import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { FC, useMemo } from 'react';
import { createStyles } from './styles';
import Calendar from '../../../../assets/icons/Schedule.svg';
import Dimensions from '../../../../theme/Dimensions';
import { commonStyles } from '../../../../styles/common';
import { birthdayCardColors } from '../../../../theme/colors';
import Call from '../../../../assets/icons/Call.svg';
import Message from '../../../../assets/icons/Message.svg';
import { useTranslation } from 'react-i18next';
import { BirthdayData } from '../../../../api/responseTypes';
import { useTheme } from '../../../../context/ThemeProvider';

interface Props {
  item: BirthdayData;
  index: number;
}
const BirthdayCard: FC<Props> = props => {
  const { item, index } = props;
  const { name, relationship, profile_photo, days_remaining, dob } = item;
  const { colors } = useTheme();
  const { t } = useTranslation();
  const styles = useMemo(() => createStyles(colors), [colors]);

  const activeColor = birthdayCardColors[index % birthdayCardColors.length];
  return (
    <View style={styles.container}>
      <View style={[commonStyles.rowBetween, commonStyles.flexStart]}>
        <View style={styles.detailsView}>
          <View
            style={[
              styles.profileContainer,
              { backgroundColor: activeColor.statusText },
            ]}
          >
            <Image source={{ uri: profile_photo }} style={styles.profile} />
          </View>
          <View style={styles.gap2}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.detailsView}>
              <Calendar
                width={Dimensions.n(10)}
                height={Dimensions.n(10)}
                fill={colors.secondary}
                stroke={colors.secondary}
              />
              <Text style={styles.bday}>{dob}</Text>
            </View>
            <Text style={styles.text}>
              {t('birthday.relationship')}: {relationship}
            </Text>
          </View>
        </View>
        <View
          style={[styles.actionBtns, { backgroundColor: activeColor.buttonBg }]}
        >
          <Text style={[styles.text, { color: activeColor.statusText }]}>
            {days_remaining > 0
              ? t('birthday.countdown', { count: days_remaining })
              : t('common.today')}
          </Text>
        </View>
      </View>
      <View style={[commonStyles.rowBetween, styles.alignEnd]}>
        <View style={styles.buttonsView}>
          <TouchableOpacity
            style={[
              styles.actionBtns,
              { backgroundColor: activeColor.buttonBg },
            ]}
          >
            <Call
              width={Dimensions.n(12)}
              height={Dimensions.n(12)}
              fill={activeColor.statusText}
            />
            <Text style={[styles.text, { color: activeColor.statusText }]}>
              {t('common.call')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.actionBtns,
              { backgroundColor: activeColor.buttonBg },
            ]}
          >
            <Message
              width={Dimensions.n(15)}
              height={Dimensions.n(15)}
              fill={activeColor.statusText}
            />
            <Text style={[styles.text, { color: activeColor.statusText }]}>
              {t('common.message')}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.extraBtn}>
          {Array.from({ length: 3 }, (_, index) => (
            <View key={index} style={styles.dot} />
          ))}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BirthdayCard;
