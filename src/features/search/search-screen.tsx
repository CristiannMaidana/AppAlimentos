import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

import ProductSheet from './components/product-sheet';
import { useSearchProducts } from './hooks/useSearchProducts';

export default function SearchScreen() {
  const params = useLocalSearchParams<{ query?: string | string[] }>();
  const searchQuery = Array.isArray(params.query) ? params.query[0] : params.query;
  const { textInput, setTextInput, products, loading, error } = useSearchProducts(searchQuery);

  // Text dinamyc for the count of items
  const subtitle =
    textInput.trim().length === 0
      ? 'Write to search products or brands'
      : `${products.length} item${products.length === 1 ? '' : 's'} found`;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Beverages</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>

      <View style={styles.searchBarWrapper}>
        <View style={styles.serchBar}>
          <Ionicons name="search" size={24} color="#94959e" style={styles.icon} />
          <TextInput
            value={textInput}
            onChangeText={setTextInput}
            placeholder="Search juices, craft sodas, teas..."
            placeholderTextColor="#94959e"
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
      </View>

      {loading ? (
        <View style={styles.stateContainer}>
          <ActivityIndicator size="small" color="#1d9848" />
          <Text style={styles.stateText}>Searching products...</Text>
        </View>
      ) : null}

      {error ? (
        <View style={styles.stateContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : null}

      <FlatList
        data={products}
        keyExtractor={(item) => item.code}
        contentContainerStyle={styles.listContent}
        keyboardShouldPersistTaps="handled"
        ListEmptyComponent={
          !loading && textInput.trim().length > 0 && !error ? (
            <Text style={styles.emptyText}>No products found for this search.</Text>
          ) : null
        }
        renderItem={({ item }) => (
          <View style={styles.productSheetContainer}>
            <ProductSheet
              title={item.productName}
              description={item.brands}
              image={item.imageUrl}
              noteNutritional={item.nutriscoreGrade}
              noteEcoScore={item.ecoscoreGrade}
              onPressed={() =>
                router.push({
                  pathname: '/(tabs)/favorites',
                  params: { code: item.code },
                })
              }
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f8f9',
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 37,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 20,
    color: '#666',
  },
  searchBarWrapper: {
    marginTop: 20,
  },
  productSheetContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContent: {
    paddingTop: 20,
    paddingBottom: 40,
  },
  input: {
    flex: 1,
    fontSize: 20,
    color: '#94959e',
    marginLeft: 10,
  },
  serchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f2f3',
    borderRadius: 14,
    paddingHorizontal: 10,
    height: 60,
  },
  icon: {
    marginLeft: 10,
  },
  stateContainer: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stateText: {
    fontSize: 15,
    color: '#666',
  },
  errorText: {
    fontSize: 15,
    color: '#c53b3b',
  },
  emptyText: {
    marginTop: 24,
    textAlign: 'center',
    color: '#666',
    fontSize: 16,
  },
});
