import { FlatList, StyleSheet, Text, View } from 'react-native';

import ProductSheet from './components/product-sheet';
import SearchBar from './components/search-bar';

export default function SearchScreen() {
  const products = [
    {
      id: '1',
      title: 'Organic Cold Pressed Kale & Ginder',
      description: 'GREEN GARDEN CO.',
      noteNutritional: 'A',
      noteEcoScore: 'A+',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Beverages</Text>
      <Text style={styles.subtitle}>numero ITEMS FOUND</Text>

      <View style={styles.searchBarWrapper}>
        <SearchBar itemSearch="" onSearch={(text) => console.log(text)} />
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productSheetContainer}>
            <ProductSheet
              title={item.title}
              description={item.description}
              noteNutritional={item.noteNutritional}
              noteEcoScore={item.noteEcoScore}
              onPressed={() => alert('Product pressed')}
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
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
