import { LinearGradient } from 'expo-linear-gradient';
import { Image, Pressable, StyleSheet, Text } from 'react-native';

type CustomCardProps = {
  title: string;
  image?: string;
  backgroundColor: string;
  onPress: () => void;
};

export default function CustomCard({
  title,
  image,
  backgroundColor,
  onPress,
}: CustomCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={styles.card}
    >
      <LinearGradient
        colors={[backgroundColor, `${backgroundColor}B3`]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
      </LinearGradient>
    </Pressable>
  );
}

// Styles for the CustomCard component
const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    height: 200,
    flex: 1,
    margin: 8,
    borderRadius: 16,
    overflow: 'hidden',
  },
  gradient: {
    flex: 1,
    borderRadius: 16,
  },
  image: {
    width: 50,
    height: 60,
    // Color only to see the image area, remove when using real images
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 10,
    position: 'absolute',
    top: 20,
    right: 20,
  },
  title: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
  },
});
