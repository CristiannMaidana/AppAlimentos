import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import CustomCard from '../components/details_categories';

export default function HomeScreen() {
  // Cards static data, replace with dynamic data of API
  const cards = [

  {

    id: '1',

    title: 'Pizza',

    image: 'https://via.placeholder.com/100',

    backgroundColor: '#fdd835',

  },

  {

    id: '2',

    title: 'Burger',

    image: 'https://via.placeholder.com/100',

    backgroundColor: '#81c784',

  },

  {

    id: '3',

    title: 'Pasta',

    image: 'https://via.placeholder.com/100',

    backgroundColor: '#64b5f6',

  },

  {

    id: '4',

    title: 'Salad',

    image: 'https://via.placeholder.com/100',

    backgroundColor: '#ff8a65',

  },

];
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>CURATED FLAVORS</Text>
      <Text style={{ fontSize: 30, marginTop: 16, fontWeight: 'bold' }}>
        The art of conscious discovery.
      </Text>
      <Text style={{ fontSize: 30, marginTop: 32,}}>
        Categories
       </Text>
       <FlatList style={{ marginTop: 20}}
        scrollEnabled={false}

        data={cards}

        keyExtractor={(item) => item.id}

        numColumns={2}

        renderItem={({ item }) => (

          <CustomCard

            title={item.title}

            image={item.image}

            backgroundColor={item.backgroundColor}

            onPress={() => alert(item.title)}

          />

        )}
      />
      <Text style={{ fontSize: 30, marginTop: 32 }}> Refine by Taste</Text>

      {/* List of buttons */}
      <View style={{ marginTop: 20, flexDirection: 'row', flexWrap: 'wrap' }}> 
        <Pressable style={styles.button} onPress={() => alert('Organic button pressed')}>
          <Text style={styles.textButton}>Organic</Text>
        </Pressable>  
        <Pressable style={styles.button} onPress={() => alert('Vegan button pressed')}>
          <Text style={styles.textButton}>Vegan</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => alert('Vegetarian button pressed')}>
          <Text style={styles.textButton}>Vegetarian</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => alert('Gluten-free button pressed')}>
          <Text style={styles.textButton}>Gluten-free</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => alert('no-added-sugar button pressed')}>
          <Text style={styles.textButton}>no-added-sugar</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => alert('fair-trade button pressed')}>
          <Text style={styles.textButton}>fair-trade</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => alert('lactose-free button pressed')}>
          <Text style={styles.textButton}>lactose-free</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => alert('palm-oil-free button pressed')}>
          <Text style={styles.textButton}>palm-oil-free</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => alert('low-fat button pressed')}>
          <Text style={styles.textButton}>high-fiber</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => alert('low-fat button pressed')}>
          <Text style={styles.textButton}>low-fat</Text>
        </Pressable>
      </View>

    <Text style={{ fontSize: 30, marginTop: 32 }}>Global Brands</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    padding: 20,
  },
  button: {
    margin: 10,
    backgroundColor: '#6fda7d',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 25,
    justifyContent: 'center',
  },
  textButton: {
    color: '#000000',
    fontSize: 16,
  },
});
