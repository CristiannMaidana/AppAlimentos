import { useMutation, useQuery } from 'convex/react';
import { router, useLocalSearchParams } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { authClient } from '@/lib/auth/auth-client';
import { Alert01FreeIcons, KitchenUtensilsIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { api } from '../../../convex/_generated/api';
import DetailsProduct from './components/details-product';
import ValuesNutritional from './components/values-nutritional';
import { useProducts } from './hooks/useProducts';

export default function FavoritesScreen() {
  const params = useLocalSearchParams<{ code?: string | string[] }>();
  const productCode = Array.isArray(params.code) ? params.code[0] : params.code;
  const { product, loading, error } = useProducts(productCode);
  const addFavorite = useMutation(api.favorites.addFavorite);
  const removeFavorite = useMutation(api.favorites.removeFavorite);

  // Authentification for login
  const { data: session } = authClient.useSession();
  const isFavorite = useQuery(
    api.favorites.isFavorite,
    session && productCode ? { code: productCode } : 'skip',
  ) ?? false;
  
  async function handleToggleFavorite() {
    // Check if the user is login for the function to login
    if (!session) {
      router.push({
        pathname: '/auth',
      })
    }
    else {
      if (!product) {
        return;
      }

      if (isFavorite) {
        await removeFavorite({ code: product.code });
        return;
      }

      await addFavorite({
        code: product.code,
        brands: product.brands,
        ecoscoreGrade: product.ecoscoreGrade ?? '',
        imageUrl: product.imageUrl,
        nutriscoreGrade: product.nutriscoreGrade,
        productName: product.productName,
      });
    }
  }

  function formatValue(value: string | undefined, unit?: string) {
    if (!value) {
      return '-';
    }

    return unit ? `${value} ${unit}` : value;
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: product?.imageUrl }} style={styles.image} />
      </View>
      <View style={styles.bottomSection}>
        <View style={styles.detailsWrapper}>
          <DetailsProduct
            title={product?.brands ?? ''}
            subtitle={product?.productName ?? ''}
            noteNutritional={product?.nutriscoreGrade ?? ''}
            noteEcoScore={product?.ecoscoreGrade ?? ''}
            notaNova={product?.novaGroup ?? ''}
            image=''
            details={[
              formatValue(product?.nutriments?.energyKj, product?.nutriments?.energyKjUnit),
              formatValue(product?.nutriments?.fat, product?.nutriments?.fatUnit),
              formatValue(product?.nutriments?.proteins, product?.nutriments?.proteinsUnit),
              formatValue(
                product?.nutriments?.carbohydrates,
                product?.nutriments?.carbohydratesUnit
              ),
            ]}
            isFavorite={isFavorite}
            onToggleFavorite={handleToggleFavorite}
          />
        </View>
      </View>
      <View style={styles.containerIngredients}>
        <View style={styles.rowIngredients}>
          <HugeiconsIcon icon={KitchenUtensilsIcon} size={24} color="#125618" strokeWidth={1.8} />
          <Text style={styles.textIngredients}>Ingredients</Text>
        </View>
        <Text>
          {loading
            ? 'Loading product...'
            : error
              ? error
              : product?.ingredientsText ||
              <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <HugeiconsIcon icon={Alert01FreeIcons} size={24} color="black" strokeWidth={1} />
                <Text>Sin informacion</Text>
              </View>
          }
        </Text>
      </View>

      <ValuesNutritional
        energy={
          product?.nutriments
            ? `${formatValue(product.nutriments.energyKcal, product.nutriments.energyKcal_unit)} / ${formatValue(product.nutriments.energyKj, product.nutriments.energyKjUnit)}`
            : '-'
        }
        fat={formatValue(product?.nutriments?.fat, product?.nutriments?.fatUnit)}
        carbohydrates={formatValue(
          product?.nutriments?.carbohydrates,
          product?.nutriments?.carbohydratesUnit
        )}
        fiber="-"
        proteins={formatValue(product?.nutriments?.proteins, product?.nutriments?.proteinsUnit)}
        salt={formatValue(product?.nutriments?.salt, product?.nutriments?.saltUnit)}
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
  imageContainer: {
    height: 300,
    backgroundColor: '#f16558',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 150,
    width: 150,
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
    padding: 30,
    gap: 20,
  },
  rowIngredients: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'flex-end',
  },
  textIngredients: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
