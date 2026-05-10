import { FlatList, StyleSheet, Text, View } from 'react-native';
import ProductSheet from '../components/products_sheet';
import SearchBar from '../components/search_bar';

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
      <Text style={{ fontSize: 37, fontWeight: 'bold', marginBottom: 5 }}>
        Beverages
      </Text>
      {/* TODO: add dinamic text to display number of items found */}
      <Text style={{ fontSize: 20, color: '#666' }}>
        numero ITEMS FOUND
      </Text>

      <View style={{marginTop: 20}}>
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
              onPressed={() => alert("Product pressed")}
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
  productSheetContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
