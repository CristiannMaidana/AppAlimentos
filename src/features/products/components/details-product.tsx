import { ScrollView, StyleSheet, Text, View } from 'react-native';

const detailLabels = ['ENERGY', 'FAT', 'PROTEIN', 'CARBOHYDRATES'];

type DetailsProductProps = {
  title: string;
  subtitle: string;
  noteNutritional: string;
  noteEcoScore: string;
  notaNova: string;
  details: string[];
  isFavorite?: boolean;
  image?: string;
  onToggleFavorite?: () => void;
};

export default function DetailsProduct({
  title,
  subtitle,
  noteNutritional,
  noteEcoScore,
  notaNova,
  details,
  isFavorite = false,
  image,
  onToggleFavorite,
}: DetailsProductProps) {
  return (
    <View style={styles.wrapper}>

      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>

        <View style={styles.scoresRow}>
          <View style={styles.subContainer}>
            <Text style={styles.nutriLabel}>NUTRI-SCORE</Text>
            <View style={styles.nutriBadge}>
              <Text style={styles.nutriBadgeText}>{noteNutritional}</Text>
            </View>
          </View>

          <View style={styles.subContainer}>
            <Text style={styles.nutriLabel}>NOVA GROUP</Text>
            <View style={[styles.nutriBadge, styles.novaBadge]}>
              <Text style={[styles.nutriBadgeText, styles.novaBadgeText]}>{notaNova}</Text>
            </View>
          </View>

          <View style={styles.subContainer}>
            <Text style={styles.nutriLabel}>ECO-SCORE</Text>
            <View style={[styles.nutriBadge, styles.ecoBadge]}>
              <Text style={styles.nutriBadgeText}>{noteEcoScore}</Text>
            </View>
          </View>
        </View>

        <ScrollView horizontal contentContainerStyle={styles.propertiesRow}>
          {details.map((detail, index) => (
            <View key={index} style={styles.containerPropieties}>
              <Text style={styles.propertyLabel}>{detailLabels[index] ?? 'detail'}</Text>
              <Text style={styles.propertyValue}>{detail}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
  },
  container: {
    zIndex: 1,
    position: 'relative',
    padding: 30,
    backgroundColor: '#ffffff',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  title: {
    fontSize: 15,
    color: '#447949',
  },
  subtitle: {
    fontSize: 50,
    color: '#000000',
    marginBottom: 20,
    fontWeight: 'bold',
    flexShrink: 1,
  },
  scoresRow: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 13,
  },
  subContainer: {
    backgroundColor: '#f1f2f3',
    borderRadius: 16,
    flex: 1,
    height: 120,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  nutriLabel: {
    fontSize: 13,
    flexShrink: 1,
    marginBottom: 10,
    marginHorizontal: 10,
    color: '#060606',
    fontWeight: '600',
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  nutriBadge: {
    backgroundColor: '#107f47',
    minWidth: 46,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  nutriBadgeText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
  novaBadge: {
    backgroundColor: '#f7ce46',
  },
  novaBadgeText: {
    color: '#000000',
  },
  ecoBadge: {
    backgroundColor: '#2e6c20',
  },
  containerPropieties: {
    backgroundColor: '#cde8c2',
    borderRadius: 4,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  propertiesRow: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 10,
  },
  propertyLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  propertyValue: {
    fontSize: 16,
    marginBottom: 5,
  },
});
