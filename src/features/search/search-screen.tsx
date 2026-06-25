import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

import ProductSheet from './components/product-sheet';

export default function SearchScreen() {
  const [itemSearch, setItemSearch] = useState('');

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
        <View style={styles.serchBar}>
          <Ionicons name="search" size={24} color="#94959e" style={styles.icon} />
          <TextInput
            value={itemSearch}
            onChangeText={setItemSearch}
            placeholder="Search juices, craft sodas, teas..."
            placeholderTextColor="#94959e"
            style={styles.input}
          />
        </View>
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
});
