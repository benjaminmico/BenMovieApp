import { View } from 'components';
import type { FunctionComponent } from 'react';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { theme } from 'utils';

interface ErrorProps {
  errorMessage: string;
  onRefresh: () => void;
}

const Error: FunctionComponent<ErrorProps> = ({ errorMessage, onRefresh }) => {
  return (
    <View>
      <Text style={styles.errorText}>{errorMessage}</Text>
      <TouchableOpacity hitSlop={20} onPress={onRefresh}>
        <Text style={styles.errorButtonText}>Try Again</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacer.medium,
  },
  errorText: {
    ...theme.typography.caption,
  },
  errorButtonText: {
    marginTop: theme.borders.medium,
    ...theme.typography.caption,
  },
});
