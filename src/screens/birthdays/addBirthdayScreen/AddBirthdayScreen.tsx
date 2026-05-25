import { View, Text, Image, ScrollView } from 'react-native';
import React, { useMemo } from 'react';
import NavBar from '../../../components/navBar/NavBar';
import { Images } from '../../../assets/images/Images';
import { useTheme } from '../../../context/ThemeProvider';
import { createStyles } from './styles';
import DetailsForm from './detailsForm/DetailsForm';
import { RootStackScreenProps } from '../../../navigation/types';
import { useCreateBirthday } from '../../../hooks/mutations/useBirthdays/useCreateBirthday';
import { RequestTypes } from '../../../api/requestTypes';

const AddBirthdayScreen = ({
  navigation,
}: RootStackScreenProps<'AddBirthday'>) => {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const { mutate: createBirthday, isPending } = useCreateBirthday();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleCreateBirthday = (
    requestData: RequestTypes.CreateBirthdayRequest,
  ) => {
    createBirthday(requestData, {
      onSuccess: response => {
        console.log('SUCCESS', response);

        navigation.goBack();
      },

      onError: error => {
        console.log('ERROR', error);
      },
    });
  };

  return (
    <View style={styles.container}>
      <NavBar
        title="Add Birthday"
        shouldShowBackArrow={true}
        handleGoBack={handleGoBack}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <Image source={Images.cake} style={styles.cake} />
          <View style={styles.cardInfoView}>
            <Text style={styles.cardTitle}>Let's make their</Text>
            <Text style={styles.cardSubTitle}>day special!🎉</Text>
            <Text style={styles.cardDes}>
              Add their birthday so you never miss a celebration
            </Text>
          </View>
        </View>
        <DetailsForm onConfirm={handleCreateBirthday} isLoading={isPending} />
      </ScrollView>
    </View>
  );
};

export default AddBirthdayScreen;
