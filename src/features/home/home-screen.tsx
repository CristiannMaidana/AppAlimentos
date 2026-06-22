import { Alert, FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import BrandCard from './components/brand-card';
import CategoryCard from './components/category-card';
import FloatingButton from './components/floating-button';

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

export default function HomeScreen() {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.eyebrow}>CURATED FLAVORS</Text>
        <Text style={styles.heroTitle}>
          The art of <Text style={styles.heroAccent}>conscious</Text> discovery.
        </Text>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <Pressable onPress={() => Alert.alert('Library', 'View Library touched')}>
            <Text style={styles.sectionLink}>View Library</Text>
          </Pressable>
        </View>

        <FlatList
          style={styles.categoriesList}
          scrollEnabled={false}
          data={cards}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => (
            <CategoryCard
              title={item.title}
              image={item.image}
              backgroundColor={item.backgroundColor}
              onPress={() => alert(item.title)}
            />
          )}
        />

        <Text style={styles.sectionTitleWithMargin}>Refine by Taste</Text>

        <View style={styles.tagsContainer}>
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
          <Pressable style={styles.button} onPress={() => alert('high-fiber button pressed')}>
            <Text style={styles.textButton}>high-fiber</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => alert('low-fat button pressed')}>
            <Text style={styles.textButton}>low-fat</Text>
          </Pressable>
        </View>

        <Text style={styles.sectionTitleWithMargin}>Global Brands</Text>
        <Text style={styles.sectionDescription}>Explored through the lens of quaility</Text>

        <FlatList
          style={styles.brandsList}
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
    backgroundColor: '#f7f8f9',
    alignItems: 'stretch',
    padding: 20,
    paddingBottom: 100,
  },
  eyebrow: {
    color: '#436c45',
    fontSize: 16,
  },
  heroTitle: {
    fontSize: 40,
    marginTop: 16,
    fontWeight: 'bold',
  },
  heroAccent: {
    fontStyle: 'italic',
    color: '#005400',
  },
  sectionHeader: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 30,
  },
  sectionTitleWithMargin: {
    fontSize: 30,
    marginTop: 32,
  },
  sectionLink: {
    fontSize: 16,
    color: '#436c45',
    fontWeight: '600',
  },
  sectionDescription: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 20,
  },
  categoriesList: {
    marginTop: 20,
  },
  brandsList: {
    marginTop: 20,
  },
  tagsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
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
