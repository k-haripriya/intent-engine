import { View, Text, FlatList } from 'react-native';
import React, { FC, useMemo, useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { useTheme } from '../../../../context/ThemeProvider';
import { createStyles } from './styles';
import { BirthdayData } from '../../../../api/responseTypes';
import BirthdayCard from '../birthdayCard/BirthdayCard';
import { birthdayCardColors, commonColors } from '../../../../theme/colors';
import { formatDateTime, hexToRgba } from '../../../../utils/CommonUtils';

interface Props {
  data: BirthdayData[];
}

const CalendarView: FC<Props> = props => {
  const { colors } = useTheme();
  const { data } = props;
  const styles = useMemo(() => createStyles(colors), [colors]);
  const [selectedMonth, setSelectedMonth] = useState<string>(
    new Date().toISOString().split('T')[0],
  );

  const birthdaysForSelectedMonth = useMemo(() => {
    const month = selectedMonth.split('-')[1];
    console.log(month, data, selectedMonth);
    return data.filter(birthday => birthday.dob.split('-')[1] === month);
  }, [data, selectedMonth]);

  const markedDates = useMemo(() => {
    const year = selectedMonth.split('-')[0];

    return birthdaysForSelectedMonth.reduce<
      Record<
        string,
        {
          dots: {
            key: string;
            color: string;
          }[];
        }
      >
    >((acc, birthday, index) => {
      const [, month, day] = birthday.dob.split('-');
      const date = `${year}-${month}-${day}`;

      if (!acc[date]) {
        acc[date] = {
          dots: [],
        };
      }

      acc[date].dots.push({
        key: birthday.id.toString(),
        color: birthdayCardColors[index % birthdayCardColors.length].statusText,
      });

      return acc;
    }, {});
  }, [birthdaysForSelectedMonth, selectedMonth]);

  const renderEmptyComponent = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No birthdays this month :{')'}</Text>
      </View>
    );
  };

  const renderListHeaderComponent = () => {
    return (
      <Text style={styles.monthName}>
        {formatDateTime(new Date(selectedMonth), 'MMMM YYYY')}
      </Text>
    );
  };

  return (
    <View>
      <Calendar
        theme={{
          calendarBackground: colors.primary,
          textSectionTitleColor: colors.primaryText,
          selectedDayBackgroundColor: colors.logo,
          selectedDayTextColor: colors.primaryText,
          todayTextColor: colors.birthdayScreen.active,
          dayTextColor: colors.primaryText,
          textDisabledColor: colors.secondaryText,
          monthTextColor: colors.primaryText,
        }}
        style={styles.calendarContainer}
        renderArrow={direction => (
          <View style={styles.calendarArrowContainer}>
            <Text style={styles.arrow}>{direction === 'left' ? '‹' : '›'}</Text>
          </View>
        )}
        current={selectedMonth}
        onMonthChange={month => {
          setSelectedMonth(month.dateString);
        }}
        markedDates={markedDates}
        markingType="multi-dot"
        dayComponent={({ date }) => {
          const birthday = markedDates[date?.dateString ?? ''];
          const bgColor = birthday ? birthday.dots[0].color : 'transparent';
          return (
            <View
              style={[
                styles.calendarBg,
                {
                  backgroundColor: birthday
                    ? hexToRgba(birthday.dots[0].color, 1)
                    : 'transparent',
                },
              ]}
            >
              <Text style={styles.dateText}>{date?.day}</Text>

              {birthday?.dots?.length > 0 && (
                <View style={styles.dotContainer}>
                  {birthday.dots.map(dot => (
                    <View
                      key={dot.key}
                      style={[
                        styles.dot,
                        {
                          backgroundColor:
                            dot.color === bgColor
                              ? commonColors.white
                              : dot.color,
                        },
                      ]}
                    />
                  ))}
                </View>
              )}
            </View>
          );
        }}
      />

      <FlatList
        data={birthdaysForSelectedMonth}
        renderItem={({ item, index }) => (
          <BirthdayCard item={item} index={index} />
        )}
        style={styles.container}
        ListEmptyComponent={renderEmptyComponent}
        ListHeaderComponent={renderListHeaderComponent}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
};

export default CalendarView;
