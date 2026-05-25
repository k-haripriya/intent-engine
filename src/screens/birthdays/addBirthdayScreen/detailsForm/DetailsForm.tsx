import { View, Text } from 'react-native';
import React, { FC, useMemo, useState } from 'react';
import { useTheme } from '../../../../context/ThemeProvider';
import { createStyles } from './styles';
import InputField from '../../../../components/inputField/InputField';
import {
  CALENDAR_MODES,
  KEYBOARD_TYPE,
  THEMES,
} from '../../../../constants/AppConstants';
import Account from '../../../../assets/icons/Account.svg';
import Heart from '../../../../assets/icons/Heart.svg';
import Phone from '../../../../assets/icons/Call.svg';
import Notes from '../../../../assets/icons/Pencil.svg';
import Dimensions from '../../../../theme/Dimensions';
import Plus from '../../../../assets/icons/Plus.svg';
import Calendar from '../../../../assets/icons/Schedule.svg';
import RoundedButton from '../../../../components/RoundedButton/RoundedButton';
import CDateTimePicker from '../../../../components/dateTimePicker/CDateTimePicker';
import { formatDateTime } from '../../../../utils/CommonUtils';
import { RequestTypes } from '../../../../api/requestTypes';

interface Props {
  onConfirm: (data: RequestTypes.CreateBirthdayRequest) => void;
  isLoading: boolean;
}
const DetailsForm: FC<Props> = props => {
  const { onConfirm, isLoading } = props;
  const { colors, isDark } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const [name, setName] = useState<string>('');
  const [relationship, setRelationship] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [dob, setDob] = useState<string>('');
  const [dobForRequest, setDobForRequest] = useState<Date>();
  const [reminderTime, setReminderTime] = useState<string>('');
  const [reminderTimeForRequest, setReminderTimeForRequest] = useState<Date>();
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isReminderTimePickerOpen, setIsReminderTimePickerOpen] =
    useState(false);
  const formData = [
    {
      label: 'Name',
      placeholder: 'Enter Name',
      keyboardType: KEYBOARD_TYPE.DEFAULT,
      value: name,
      setValue: setName,
      icon: Account,
      isTextArea: false,
      isActionComponent: false,
      key: 'name',
      handleAction: () => {},
    },
    {
      label: 'Relationship',
      placeholder: 'Enter Relationship',
      keyboardType: KEYBOARD_TYPE.DEFAULT,
      value: relationship,
      setValue: setRelationship,
      icon: Heart,
      isTextArea: false,
      isActionComponent: false,
      key: 'relationship',
      handleAction: () => {},
    },
    {
      label: 'Phone Number',
      placeholder: 'Enter Phone Number',
      keyboardType: KEYBOARD_TYPE.NUMERIC,
      value: phoneNumber,
      setValue: setPhoneNumber,
      icon: Phone,
      isTextArea: false,
      isActionComponent: false,
      key: 'phoneNumber',
      handleAction: () => {},
    },
    {
      label: 'Notes',
      placeholder: 'Enter Notes',
      keyboardType: KEYBOARD_TYPE.DEFAULT,
      value: notes,
      setValue: setNotes,
      icon: Notes,
      isTextArea: true,
      isActionComponent: false,
      key: 'notes',
      handleAction: () => {},
    },
    {
      label: 'DOB',
      placeholder: 'Enter Date of Birth',
      keyboardType: KEYBOARD_TYPE.DEFAULT,
      value: dob,
      setValue: setDob,
      icon: Calendar,
      isTextArea: false,
      isActionComponent: true,
      key: 'dob',
      handleAction: () => {
        handleDateAndTimePicker('dob');
      },
    },
    {
      label: 'Reminder Time',
      placeholder: 'Enter Reminder Time',
      keyboardType: KEYBOARD_TYPE.DEFAULT,
      value: reminderTime,
      setValue: setReminderTime,
      icon: Calendar,
      isTextArea: false,
      isActionComponent: true,
      key: 'reminderTime',
      handleAction: () => {
        handleDateAndTimePicker('reminderTime');
      },
    },
  ];

  const handleSaveBirthday = () => {
    if (
      !name ||
      !relationship ||
      !phoneNumber ||
      !reminderTime ||
      !dobForRequest ||
      !reminderTimeForRequest
    )
      return;
    const requestData: RequestTypes.CreateBirthdayRequest = {
      name: name,
      dob: formatDateTime(dobForRequest, 'YYYY-MM-DD'),
      phone_number: phoneNumber,
      notes: notes,
      profile_photo: '',
      relationship: relationship,
      reminder_time: formatDateTime(reminderTimeForRequest, 'HH:mm:ss'),
    };
    onConfirm(requestData);
  };

  const handleDateAndTimePicker = (key: string) => {
    switch (key) {
      case 'dob':
        setIsDatePickerOpen(!isDatePickerOpen);
        break;
      case 'reminderTime':
        setIsReminderTimePickerOpen(!isReminderTimePickerOpen);
        break;
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tell us about the Person</Text>
      <View style={styles.profilePhotoView}>
        <View style={styles.profileBg}>
          <Account
            width={Dimensions.n(50)}
            height={Dimensions.n(50)}
            fill={colors.birthdayScreen.active}
          />
          <View style={styles.plusView}>
            <Plus width={Dimensions.n(12)} height={Dimensions.n(12)} />
          </View>
        </View>
        <Text style={styles.uploadPhoto}>Upload Photo</Text>
      </View>
      <View style={styles.detailsView}>
        {formData?.map((item, index) => (
          <InputField
            key={index}
            label={item.label}
            placeholder={item.placeholder}
            keyboardType={item.keyboardType}
            value={item.value}
            setValue={item.setValue}
            Icon={item.icon}
            iconFill={colors.birthdayScreen.active}
            iconBg={colors.birthdayScreen.activeOverlay}
            isTextArea={item.isTextArea}
            isActionComponent={item.isActionComponent}
            handleAction={item.handleAction}
          />
        ))}
      </View>
      <RoundedButton
        title="Save"
        onPress={handleSaveBirthday}
        style={styles.saveBtn}
        textStyle={styles.saveBtnTitle}
      />
      {(isDatePickerOpen || isReminderTimePickerOpen) && (
        <CDateTimePicker
          mode={isDatePickerOpen ? CALENDAR_MODES.DATE : CALENDAR_MODES.TIME}
          value={
            isDatePickerOpen
              ? dob
                ? new Date(dob)
                : new Date()
              : reminderTime
              ? new Date(reminderTime)
              : new Date()
          }
          theme={isDark ? THEMES.DARK : THEMES.LIGHT}
          onCancel={() => {
            isDatePickerOpen
              ? setIsDatePickerOpen(false)
              : setIsReminderTimePickerOpen(false);
          }}
          onConfirm={(date: Date) => {
            isDatePickerOpen
              ? setDobForRequest(date)
              : setReminderTimeForRequest(date);
            isDatePickerOpen
              ? setDob(formatDateTime(date, 'DD MMM YYYY'))
              : setReminderTime(formatDateTime(date, 'hh:mm A'));
            isDatePickerOpen
              ? setIsDatePickerOpen(false)
              : setIsReminderTimePickerOpen(false);
          }}
          maxDate={new Date()}
        />
      )}
    </View>
  );
};

export default DetailsForm;
