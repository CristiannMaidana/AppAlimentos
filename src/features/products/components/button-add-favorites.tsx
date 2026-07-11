import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Pressable, StyleSheet } from 'react-native';

type ButtonAddFavoritesProps = {
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
};

export default function ButtonAddFavorites({
  onToggleFavorite,
  isFavorite = false,
}: ButtonAddFavoritesProps) {
  return (
    <Pressable
      accessibilityLabel={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      accessibilityRole="button"
      accessibilityState={{ selected: isFavorite }}
      hitSlop={8}
      onPress={onToggleFavorite}
      style={({ pressed }) => [
        styles.container,
        isFavorite && styles.favoriteContainer,
        pressed && styles.pressed,
      ]}>
      <MaterialIcons
        color={isFavorite ? 'rgb(90, 101, 92)0, 226, 220, 0.84)f' : '#29621d'}
        name={isFavorite ? 'favorite' : 'favorite-border'}
        size={28}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(220, 226, 220, 0.84)f',
    borderColor: '#ffffff2d',
    borderRadius: 999,
    borderWidth: 2,
    height: 60,
    justifyContent: 'center',
    width: 60,
  },
  favoriteContainer: {
    backgroundColor: '#fffff',
  },
  pressed: {
    opacity: 0.75,
    transform: [{ scale: 0.96 }],
  },
});
