import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { WidgetPreview } from 'react-native-android-widget';

import { BirthdayWidget } from './BirthdayWidget';

export function WidgetPreviewScreen() {
  return (
    <View style={styles.container}>
      <WidgetPreview
        renderWidget={() => <BirthdayWidget />}
        width={360}
        height={210}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
