import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';
import { type ReactElement } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type CategoryCardProps = {
  title: string;
  icon?: keyof typeof MaterialCommunityIcons.glyphMap | ReactElement;
  backgroundColor: string;
  onPress: () => void;
};

export default function CategoryCard({
  title,
  icon,
  backgroundColor,
  onPress,
}: CategoryCardProps) {
  return (
    <Pressable onPress={onPress} style={styles.card}>
      <LinearGradient
        colors={[backgroundColor, `${backgroundColor}B3`]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}>
        {typeof icon === 'string' ? (
          <MaterialCommunityIcons name={icon} size={54} color="#fff" style={styles.icon} />
        ) : icon ? (
          <View style={styles.icon}>{icon}</View>
        ) : null}
        <Text style={styles.title}>{title}</Text>
      </LinearGradient>
    </Pressable>
  );
}

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
  icon: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  title: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '600',
    color: '#fff',
  },
});
