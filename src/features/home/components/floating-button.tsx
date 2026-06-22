import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet } from 'react-native';

type FloatingButtonProps = {
  iconName: keyof typeof Ionicons.glyphMap;
  backgroundColor: string;
  onPress: () => void;
};

export default function FloatingButton({
  iconName,
  backgroundColor,
  onPress,
}: FloatingButtonProps) {
  return (
    <Pressable onPress={onPress} style={[styles.button, { backgroundColor }]}>
      <Ionicons name={iconName} size={24} color="white" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
