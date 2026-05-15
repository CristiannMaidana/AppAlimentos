import { Alert, FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import BrandCard from '../components/details_brands';
import CustomCard from '../components/details_categories';
import FloatingButton from '../components/floating_button';

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

  // Brands static data, replace with dynamic data of API
  const brands = [
    {
      id: '1',
      title: 'NESTLE',
      subTitle: 'nestle',
      backgroundColor: '#d6f5d6',
    },
    {
      id: '2',
      title: 'COKE',
      subTitle: 'coca-cola',
      backgroundColor: '#d6ecff',
    },
    {
      id: '3',
      title: 'PEPSI',
      subTitle: 'pepso',
      backgroundColor: '#ffe4cc',
    },
    {
      id: '4',
      title: 'DANONE',
      subTitle: 'danone',
      backgroundColor: '#f4ddff',
    },
  ];

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={{ color: '#436c45', fontSize: 16 }}>CURATED FLAVORS</Text>
        <Text style={{ fontSize: 40, marginTop: 16, fontWeight: 'bold' }}>
          The art of <Text style={{ fontStyle: 'italic', color: '#005400' }}>conscious</Text> discovery.
        </Text>
        <View style={{ marginTop: 32, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontSize: 30 }}>
            Categories
          </Text>
          <Pressable onPress={() => Alert.alert('Library', 'View Library touched')}>
            <Text style={{ fontSize: 16, color: '#436c45', fontWeight: '600' }}>
              View Library
            </Text>
          </Pressable>
        </View>
        <FlatList
          style={{ marginTop: 20 }}
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

        <Text style={{ fontSize: 30, marginTop: 32 }}>
          Global Brands
        </Text>
        <Text style={{ fontSize: 16, marginTop: 10, marginBottom: 20 }}>
          Explored through the lens of quaility
        </Text>
        <FlatList
          style={{ marginTop: 20 }}
          scrollEnabled={false}
          data={brands}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => (
            <BrandCard
              title={item.title}
              subTitle={item.subTitle}
              backgroundColor={item.backgroundColor}
              onPress={() => alert(item.title)}
            />
          )}
        />
      </ScrollView>
      <FloatingButton
        iconName="search"
        backgroundColor="#13691e"
        onPress={() => alert('Floating button pressed')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    padding: 20,
    paddingBottom: 100,
  },
  button: {
    margin: 10,
    backgroundColor: '#bfe5b9',
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
