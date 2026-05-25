import { View, Text, TouchableOpacity } from 'react-native';
import React, { FC, useMemo, useState } from 'react';
import CModal from '../cModal/CModal';
import DatePicker from 'react-native-date-picker';
import { createStyles } from './styles';
import { useTheme } from '../../context/ThemeProvider';
import { CALENDAR_MODES, THEMES } from '../../constants/AppConstants';

interface Props {
  mode: CALENDAR_MODES;
  value: Date;
  onConfirm: (date: Date) => void;
  onCancel: () => void;
  theme: THEMES;
  maxDate?: Date;
  minDate?: Date;
}

const CDateTimePicker: FC<Props> = props => {
  const { mode, value, onConfirm, onCancel, theme, maxDate, minDate } = props;
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const [selectedDate, setSelectedDate] = useState(value);
  return (
    <CModal>
      <View style={styles.datePicker}>
        <Text style={styles.titleText}>Select Date</Text>
        <DatePicker
          mode={mode}
          open={true}
          date={selectedDate}
          onConfirm={onConfirm}
          theme={theme}
          onCancel={onCancel}
          onDateChange={setSelectedDate}
          maximumDate={maxDate || new Date()}
        />
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={onCancel}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => onConfirm(selectedDate)}
          >
            <Text style={styles.confirmText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </CModal>
  );
};

export default CDateTimePicker;
