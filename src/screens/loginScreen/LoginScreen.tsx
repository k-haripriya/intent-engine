import { View, Text, TouchableOpacity } from 'react-native';
import React, { useMemo, useState } from 'react';
import { useTheme } from '../../context/ThemeProvider';
import { createStyles } from './styles';
import { useTranslation } from 'react-i18next';
import InputField from '../../components/inputField/InputField';
import RoundedButton from '../../components/RoundedButton/RoundedButton';
import { RequestTypes } from '../../api/requestTypes';
import { AuthService } from '../../api/service/authService';
import Vector from './vector/Vector';
import Dimensions from '../../theme/Dimensions';
import GoogleIcon from '../../assets/icons/google.svg';
import { ResponseTypes } from '../../api/responseTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_CONSTANTS } from '../../storage/storageConstants';
import Loader from '../../components/loader/Loader';
import { RootStackScreenProps } from '../../navigation/types';
import { ROUTES } from '../../navigation/routes';

const LoginScreen = ({ navigation }: RootStackScreenProps<'Login'>) => {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [isShowLoader, setIsShowLoader] = useState(false);

  const fields = isSignUp
    ? [
        {
          label: t('login.username'),
          value: username,
          setValue: setUsername,
          placeHolder: `${t('login.enter')} ${t('login.username')}`,
        },
        {
          label: t('login.email'),
          value: email,
          setValue: setEmail,
          placeHolder: `${t('login.enter')} ${t('login.email')}`,
        },
        {
          label: t('login.password'),
          value: password,
          setValue: setPassword,
          placeHolder: `${t('login.enter')} ${t('login.password')}`,
        },
      ]
    : [
        {
          label: t('login.email'),
          value: email,
          setValue: setEmail,
          placeHolder: `${t('login.enter')} ${t('login.email')}`,
        },
        {
          label: t('login.password'),
          value: password,
          setValue: setPassword,
          placeHolder: `${t('login.enter')} ${t('login.password')}`,
        },
      ];

  const handleLoginTypeChange = () => {
    setIsSignUp(!isSignUp);
  };

  const setInfoToLocalStorage = async (data: ResponseTypes.LoginResponse) => {
    try {
      await AsyncStorage.setItem(
        STORAGE_CONSTANTS.ACCESS_TOKEN,
        data.tokens.access,
      );
      await AsyncStorage.setItem(
        STORAGE_CONSTANTS.REFRESH_TOKEN,
        data.tokens.refresh,
      );
      await AsyncStorage.setItem(
        STORAGE_CONSTANTS.USER_ID,
        JSON.stringify(data.user.id),
      );
      await AsyncStorage.setItem(
        STORAGE_CONSTANTS.USER_NAME,
        data.user.username,
      );
      await AsyncStorage.setItem(STORAGE_CONSTANTS.USER_EMAIL, data.user.email);
      setTimeout(() => {
        navigation.navigate(ROUTES.HOMEDRAWER);
      }, 3000);
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleSignup = async () => {
    try {
      setIsShowLoader(true);
      const registerRequest: RequestTypes.RegisterRequest = {
        email,
        password,
        username,
      };
      console.log(registerRequest);
      const response = await AuthService.register(registerRequest);
      await setInfoToLocalStorage(response);
    } catch (error) {
      console.log('error', error);
      setIsShowLoader(false);
    }
  };

  const handleProceed = () => {
    if (isSignUp) {
      handleSignup();
    } else {
      handleLogin();
    }
  };

  const handleLogin = async () => {
    try {
      setIsShowLoader(true);
      const loginRequest: RequestTypes.LoginRequest = {
        email,
        password,
      };
      const response = await AuthService.login(loginRequest);
      await setInfoToLocalStorage(response);
    } catch (error) {
      console.log('error', error);
      setIsShowLoader(false);
    }
  };
  return (
    <View style={styles.container}>
      <Vector />
      <View>
        <Text style={styles.welcomeText}>{t('login.welcome')}</Text>
        <Text style={styles.loginText}>{t('login.loginAndContinue')}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>
          {isSignUp ? t('login.signup') : t('login.login')}
        </Text>
        <Text style={[styles.loginSubText, styles.width180]}>
          {isSignUp ? t('login.enterDetails') : t('login.enterRegisteredDet')}
        </Text>
        {fields.map((field, index) => (
          <InputField
            key={index}
            value={field.value}
            label={field.label}
            setValue={field.setValue}
            placeholder={field.placeHolder}
          />
        ))}
        <RoundedButton
          title={isSignUp ? t('login.signup') : t('login.login')}
          onPress={handleProceed}
        />
        <View style={styles.loginView}>
          <Text style={styles.loginSubText}>
            {isSignUp
              ? t('login.alreadyHaveAccount')
              : t('login.dontHaveAccount')}
          </Text>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={handleLoginTypeChange}
          >
            <Text style={styles.loginBtnText}>
              {isSignUp ? t('login.login') : t('login.signup')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomView}>
        <Text style={styles.orText}>Or</Text>
        <View style={styles.googleView}>
          <GoogleIcon height={Dimensions.n(20)} width={Dimensions.n(20)} />
          <Text style={styles.googleText}>{t('login.continueWithGoogle')}</Text>
        </View>
      </View>
      {isShowLoader && <Loader />}
    </View>
  );
};

export default LoginScreen;
