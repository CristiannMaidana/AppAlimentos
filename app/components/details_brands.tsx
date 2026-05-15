import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type CustomCardProps = {
    title: string;
    subTitle: string;
    backgroundColor: string;
    onPress: () => void;
};

function shiftHexColor(hexColor: string, amount: number) {
  const hex = hexColor.replace('#', '');
  const normalizedHex = hex.length === 3
    ? hex.split('').map((char) => char + char).join('')
    : hex;

  const color = parseInt(normalizedHex, 16);
  const clamp = (value: number) => Math.max(0, Math.min(255, value));
  const r = clamp((color >> 16) + amount);
  const g = clamp(((color >> 8) & 0x00ff) + amount);
  const b = clamp((color & 0x0000ff) + amount);

  return `rgb(${r}, ${g}, ${b})`;
}

export default function CustomCard({
    title,
    subTitle,
    backgroundColor,
    onPress,
}: CustomCardProps) {
    const gradientColors: [string, string, string] = [
      shiftHexColor(backgroundColor, 50),
      backgroundColor,
      shiftHexColor(backgroundColor, -35),
    ];

    return (
    <Pressable
      onPress={onPress}
      style={[styles.card]}
    >
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0.2, y: 0.15 }}
        end={{ x: 0.85, y: 0.9 }}
        style={styles.brandCircle}>
        <View style={styles.circleHighlight} />
        <Text style={styles.brandTitle}>{title}</Text>
      </LinearGradient>
      <Text style={styles.title}>{subTitle}</Text>
    </Pressable>
  );
}

// Styles for the CustomCard component
const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    height: 180,
    flex: 1,
    margin: 8,
    borderRadius: 20,
    backgroundColor: '#F3F4F5',
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
  },
  brandCircle: {
    height: 90,
    width: 90,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 8, height: 10 },
    shadowOpacity: 0.22,
    shadowRadius: 12,
    elevation: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.35)',
    overflow: 'hidden',
  },
  circleHighlight: {
    position: 'absolute',
    top: 10,
    left: 12,
    width: 34,
    height: 22,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    transform: [{ rotate: '-18deg' }],
  },
  brandTitle: {
    color: '#111111',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
