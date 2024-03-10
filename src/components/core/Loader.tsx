import type { FunctionComponent } from 'react';
import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { theme } from 'utils';

const Loader: FunctionComponent = () => {
  return (
    <ActivityIndicator
      style={styles.container}
      size="large"
      color={theme.colors.primary}
    />
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: theme.spacer.medium,
  },
});
