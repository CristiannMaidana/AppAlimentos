import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

type ProductSheetProps = {
  title: string;
  description: string;
  image?: string;
  noteNutritional?: string | null;
  noteEcoScore?: string | null;
  onPressed: () => void;
};

export default function ProductSheet({
  title,
  description,
  image,
  noteNutritional,
  noteEcoScore,
  onPressed,
}: ProductSheetProps) {
  return (
    <Pressable style={styles.container} onPress={onPressed}>
      <View style={styles.contentRow}>
        <View style={styles.imagePlaceholder}>
          {image ? (
            <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
          ) : (
            <Ionicons name="image-outline" size={28} color="#b5b7bf" />
          )}
        </View>

        <View style={styles.textContent}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>

          <View style={styles.badgesRow}>
            <View style={[styles.badge, styles.nutriBadge]}>
              <Text style={styles.nutriBadgeText}>
                NUTRI-SCORE {noteNutritional?.toUpperCase() ?? '-'}
              </Text>
            </View>

            <View style={[styles.badge, styles.ecoBadge]}>
              <Text style={styles.ecoBadgeText}>
                ECO-SCORE {noteEcoScore?.toUpperCase() ?? '-'}
              </Text>
            </View>
          </View>
        </View>

        <Ionicons
          name="chevron-forward"
          size={27}
          color="#ceced2"
          style={styles.chevron}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    margin: 20,
    width: '100%',
    padding: 16,
    borderColor: '#ebedee',
    borderWidth: 0.49,
  },
  contentRow: {
    flexDirection: 'row',
  },
  imagePlaceholder: {
    width: 90,
    height: 90,
    backgroundColor: '#f1f2f3',
    borderRadius: 8,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContent: {
    flex: 1,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    flexShrink: 1,
  },
  description: {
    fontSize: 16,
    color: '#666',
  },
  badgesRow: {
    marginTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
  },
  badge: {
    borderRadius: 3,
    paddingHorizontal: 10,
    paddingVertical: 4,
    height: 45,
    width: 100,
    justifyContent: 'center',
  },
  nutriBadge: {
    backgroundColor: '#1d9848',
  },
  ecoBadge: {
    backgroundColor: '#bfe5b9',
  },
  nutriBadgeText: {
    fontSize: 13,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  ecoBadgeText: {
    fontSize: 13,
    color: '#4f6a4d',
    fontWeight: 'bold',
  },
  chevron: {
    marginLeft: 10,
    alignSelf: 'center',
  },
});
