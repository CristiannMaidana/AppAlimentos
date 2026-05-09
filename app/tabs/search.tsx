import { StyleSheet, Text, View } from 'react-native';
import ProductSheet from '../components/products_sheet';

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, marginBottom: 20 }}>
        Search
      </Text>
      <Text style={{ fontSize: 16 }}>
        Explore the world of food through the lens of quality
      </Text>

      <View style={styles.productSheetContainer}>
        <ProductSheet
          title="Organic Cold Pressed Kale & Ginder"
          description="GREEN GARDEN CO."
          noteNutritional="A"
          noteEcoScore="A+"
          onPressed={() => alert("Product pressed")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f8f9',
  },
  productSheetContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
});
