import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-ico-material-design';
import { theme } from 'utils';

type NavigationBarProps = {
  actionType: 'goBack' | 'close';
  onPress?: () => void;
};

const NavigationBar: React.FC<NavigationBarProps> = ({
  onPress,
  actionType,
}) => {
  const { goBack } = useNavigation();

  return (
    <View style={styles.NavigationBar}>
      {actionType === 'goBack' ? (
        <TouchableOpacity
          hitSlop={20}
          onPress={() => (onPress ? onPress() : goBack())}
          style={styles.leftIcon}
        >
          <Icon
            name="go-back-left-arrow"
            height="24"
            width="24"
            color={theme.colors.primary}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          hitSlop={20}
          onPress={() => (onPress ? onPress() : goBack())}
          style={styles.rightIcon}
        >
          <Icon
            name="close-button"
            height="24"
            width="24"
            color={theme.colors.primary}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  NavigationBar: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  leftIcon: {
    position: 'absolute',
    left: theme.spacer.medium,
  },
  rightIcon: {
    position: 'absolute',
    right: theme.spacer.medium,
    // Style as needed
  },
});

export default NavigationBar;
