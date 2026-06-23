import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import DetailsProduct from './components/details-product';
import ValuesNutritional from './components/values-nutritional';

export default function FavoritesScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <Image style={styles.image} />
      <View style={styles.bottomSection}>
        <View style={styles.detailsWrapper}>
          <DetailsProduct
            title="OATLY"
            subtitle="The Original Oatly Oat Milk"
            noteNutritional="A"
            noteEcoScore="A"
            notaNova="1"
            details={['193 kJ', '1.5 g', '1.0g', 'detail1']}
            isFavorite
            onToggleFavorite={() => alert('Toggle favorite')}
          />
        </View>
      </View>
      <View style={styles.containerIngredients}>
        <Text>Ingredients</Text>
        <Text>
          Water, Oats (10%), Rapeseed oil, Minerals (Calcium carbonate, Dibasic
          calcium phosphate, Potassium iodide), Salt, Vitamins (D2, Riboflavin,
          B12).
        </Text>
      </View>

      <ValuesNutritional
        energy="193 kJ"
        fat="1.5 g"
        carbohydrates="6.7 g"
        fiber="0.8 g"
        proteins="1.0 g"
        salt="0.10 g"
        valueNutritional="Per 100ml"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6f7',
  },
  image: {
    height: 300,
    backgroundColor: '#f16558',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  bottomSection: {
    backgroundColor: '#f5f6f7',
    marginBottom: 8,
  },
  detailsWrapper: {
    marginTop: -40,
    paddingHorizontal: 20,
    zIndex: 1,
  },
  containerIngredients: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: '#f3f4f5',
    borderRadius: 30,
    margin: 20,
    alignItems: 'center',
    padding: 30,
    gap: 10,
  },
  containerAllergen: {
    backgroundColor: '#f4ecec',
    padding: 20,
    borderRadius: 10,
    margin: 20,
    alignItems: 'stretch',
    gap: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  allergenTextGroup: {
    gap: 5,
    paddingLeft: 10,
  },
  allergenTitle: {
    color: '#aa201e',
  },
  allergenText: {
    color: '#8a3633',
  },
});
