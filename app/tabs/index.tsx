import { FlatList, StyleSheet, Text, View } from 'react-native';
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
    <View style={styles.container}>
      <Text>CURATED FLAVORS</Text>
      <Text style={{ fontSize: 30, marginTop: 16, fontWeight: 'bold' }}>
        The art of conscious discovery.
      </Text>
      <Text style={{ fontSize: 20, marginTop: 32,}}>
        Categories
       </Text>
       <FlatList

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    padding: 16,
    },
});
