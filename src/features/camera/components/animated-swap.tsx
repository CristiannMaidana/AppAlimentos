import { ReactNode, useEffect } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type AnimatedSwapProps = {
  active: boolean;
  inactiveChild: ReactNode;
  activeChild: ReactNode;
  duration?: number;
  style?: StyleProp<ViewStyle>;
};

const DEFAULT_DURATION = 800;
const OFFSET_Y = 8;
const TRANSITION_EASING = Easing.bezier(0.22, 1, 0.36, 1);

export default function AnimatedSwap({
  active,
  inactiveChild,
  activeChild,
  duration = DEFAULT_DURATION,
  style,
}: AnimatedSwapProps) {
  const inactiveOpacity = useSharedValue(active ? 0 : 1);
  const inactiveTranslateY = useSharedValue(active ? -OFFSET_Y : 0);
  const activeOpacity = useSharedValue(active ? 1 : 0);
  const activeTranslateY = useSharedValue(active ? 0 : OFFSET_Y);

  useEffect(() => {
    const config = {
      duration,
      easing: TRANSITION_EASING,
    };

    inactiveOpacity.value = withTiming(active ? 0 : 1, config);
    inactiveTranslateY.value = withTiming(active ? -OFFSET_Y : 0, config);
    activeOpacity.value = withTiming(active ? 1 : 0, config);
    activeTranslateY.value = withTiming(active ? 0 : OFFSET_Y, config);
  }, [active, activeOpacity, activeTranslateY, duration, inactiveOpacity, inactiveTranslateY]);

  const inactiveAnimatedStyle = useAnimatedStyle(() => ({
    opacity: inactiveOpacity.value,
    transform: [{ translateY: inactiveTranslateY.value }],
  }));

  const activeAnimatedStyle = useAnimatedStyle(() => ({
    opacity: activeOpacity.value,
    transform: [{ translateY: activeTranslateY.value }],
  }));

  return (
    <View pointerEvents="box-none" style={[styles.container, style]}>
      <Animated.View
        pointerEvents={active ? 'none' : 'auto'}
        style={[styles.layer, inactiveAnimatedStyle]}>
        {inactiveChild}
      </Animated.View>
      <Animated.View
        pointerEvents={active ? 'auto' : 'none'}
        style={[styles.layer, activeAnimatedStyle]}>
        {activeChild}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  layer: {
    ...StyleSheet.absoluteFillObject,
  },
});
