import { View, Text } from 'react-native';
import React, { useMemo, useState } from 'react';
import { useTheme } from '../../context/ThemeProvider';
import { createStyles } from './styles';
import { useTranslation } from 'react-i18next';
import InputField from '../../components/inputField/InputField';
import RoundedButton from '../../components/RoundedButton/RoundedButton';
import { RequestTypes } from '../../api/requestTypes';
import { AuthService } from '../../api/service/authService';

const LoginScreen = () => {
  const { colors } = useTheme();
  const styles = useMemo(() => createStyles(colors), [colors]);
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const fields = [
    {
      label: 'Email',
      value: email,
      setValue: setEmail,
      placeHolder: 'Enter Email',
    },
    {
      label: 'Password',
      value: password,
      setValue: setPassword,
      placeHolder: 'Enter Password',
    },
  ];

  const handleLogin = async () => {
    try {
      const loginRequest: RequestTypes.LoginRequest = {
        username: email,
        password,
      };
      console.log(loginRequest);
      const response = await AuthService.login(loginRequest);
      console.log(response);
    } catch (error) {
      console.log('error', error);
    } finally {
      console.log('finally');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{t('login.signup')}</Text>
        {fields.map((field, index) => (
          <InputField
            key={index}
            value={field.value}
            label={field.label}
            setValue={field.setValue}
            placeholder={field.placeHolder}
          />
        ))}
        <RoundedButton title="Sign In" onPress={handleLogin} />
      </View>
    </View>
  );
};

export default LoginScreen;
