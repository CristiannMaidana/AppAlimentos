import { useLocalSearchParams } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import DetailsProduct from './components/details-product';
import ValuesNutritional from './components/values-nutritional';
import { useProducts } from './hooks/useProducts';

export default function FavoritesScreen() {
  const params = useLocalSearchParams<{ code?: string | string[] }>();
  const productCode = Array.isArray(params.code) ? params.code[0] : params.code;
  const { product, loading, error } = useProducts(productCode);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <Image style={styles.image} />
      <View style={styles.bottomSection}>
        <View style={styles.detailsWrapper}>
          <DetailsProduct
            title={product?.brands ?? ''}
            subtitle={product?.productName ?? ''}
            noteNutritional={product?.nutriscoreGrade ?? ''}
            noteEcoScore={product?.ecoscoreGrade ?? ''}
            notaNova={product?.novaGroup ?? ''}
            details={[`${product?.nutriments?.energyKj} ${product?.nutriments?.energyKjUnit}`, `${product?.nutriments?.fat} ${product?.nutriments?.fatUnit}`, `${product?.nutriments?.proteins} ${product?.nutriments?.proteinsUnit}`, 'detail1']}
            isFavorite
            onToggleFavorite={() => alert('Toggle favorite')}
          />
        </View>
      </View>
      <View style={styles.containerIngredients}>
        <Text>Ingredients</Text>
        <Text>
          {loading
            ? 'Loading product...'
            : error
              ? error
              : product?.ingredientsText || 'Select a product from search.'}
        </Text>
      </View>

      <ValuesNutritional
        energy={`${product?.nutriments?.energyKcal ?? ''} ${product?.nutriments?.energyKcal_unit ?? ''}/ ${product?.nutriments?.energyKj} ${product?.nutriments?.energyKjUnit}`}
        fat={`${product?.nutriments?.fat} ${product?.nutriments?.fatUnit}`}
        carbohydrates={`${product?.nutriments?.carbohydrates} ${product?.nutriments?.carbohydratesUnit}`}
        fiber=''
        proteins={`${product?.nutriments?.proteins} ${product?.nutriments?.proteinsUnit}`}
        salt={`${product?.nutriments?.salt} ${product?.nutriments?.saltUnit}`}
        valueNutritional={product?.nutriotionalDataPer ?? ''}
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
