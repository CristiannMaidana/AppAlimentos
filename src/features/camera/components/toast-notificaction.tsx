import { Tick02FreeIcons } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';

type ToastNotificationProps = {
  message: string;
  showToast: boolean;
};

export default function ToastNotification({ message, showToast }: ToastNotificationProps) {
  const [isVisible, setIsVisible] = useState(showToast);
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(20);

  useEffect(() => {
    let hideTimer: ReturnType<typeof setTimeout> | undefined;
    let removeTimer: ReturnType<typeof setTimeout> | undefined;

    if (showToast) {
      setIsVisible(true);
      opacity.value = withTiming(1, { duration: 400 });
      translateY.value = withTiming(0, { duration: 400 });

      hideTimer = setTimeout(() => {
        opacity.value = withTiming(0, { duration: 400 });
        translateY.value = withTiming(-20, { duration: 400 });

        removeTimer = setTimeout(() => {
          setIsVisible(false);
        }, 400);
      }, 3000);
    } else {
      setIsVisible(false);
      opacity.value = 0;
      translateY.value = 20;
    }

    return () => {
      if (hideTimer) {
        clearTimeout(hideTimer);
      }

      if (removeTimer) {
        clearTimeout(removeTimer);
      }
    };
  }, [opacity, showToast, translateY]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  if (!isVisible) {
    return null;
  }

  return (
    <Animated.View pointerEvents="none" style={[styles.successfullyScanned, animatedStyle]}>
      <HugeiconsIcon icon={Tick02FreeIcons} size={24} color="#FFFFFF" strokeWidth={1.8} />
      <Text style={styles.textStyle}>{message}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  successfullyScanned: {
    paddingHorizontal: 35,
    paddingVertical: 10,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    bottom: 610,
    left: 125,
    right: 125,
    backgroundColor: 'green',
    borderRadius: 22,
    zIndex: 2,
  },
  textStyle: {
    fontSize: 14,
    color: 'white',
  },
});
