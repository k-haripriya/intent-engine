/* eslint-disable @typescript-eslint/no-require-imports */
import { View, Text, Modal } from 'react-native';
import React, { useMemo } from 'react';
import LottieView from 'lottie-react-native';
import Dimensions from '../../theme/Dimensions';
import { useTheme } from '../../context/ThemeProvider';
import { createStyles } from './styles';
import { useTranslation } from 'react-i18next';

const Loader = () => {
  const { colors } = useTheme();
  const { t } = useTranslation();
  const styles = useMemo(() => createStyles(colors), [colors]);
  return (
    <Modal onDismiss={() => {}}>
      <View style={styles.container}>
        <LottieView
          autoPlay
          source={require('../../assets/animations/loader.json')}
          style={{ height: Dimensions.n(250), width: Dimensions.n(250) }}
        />
        <Text style={styles.loadingtext}>{t('loader.loading')}</Text>
      </View>
    </Modal>
  );
};

export default Loader;
