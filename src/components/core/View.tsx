import type { ReactNode } from 'react';
import React, { useEffect, useState } from 'react';
import type { ViewStyle } from 'react-native';
import { Animated } from 'react-native';

const FADE_IN_DEFAULT_TIME = 1000;

interface FadeInViewProps extends ViewStyle {
  children: ReactNode;
  fadeIn?: boolean;
  fadeInTime?: number;
}

const FadeInView: React.FC<FadeInViewProps> = ({
  fadeIn = false,
  children,
  fadeInTime,
}) => {
  const [fadeAnim] = useState(new Animated.Value(fadeIn ? 0 : 1));

  useEffect(() => {
    if (!fadeIn) return;
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: fadeInTime || FADE_IN_DEFAULT_TIME,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, fadeIn, fadeInTime]);

  return (
    <Animated.View
      style={[
        {
          opacity: fadeAnim,
        },
      ]}
    >
      {children}
    </Animated.View>
  );
};

export default FadeInView;
