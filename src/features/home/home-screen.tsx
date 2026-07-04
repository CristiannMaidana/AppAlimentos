import { ChocolateFreeIcons, Coffee02FreeIcons, CookieFreeIcons, Cupcake03Icon, DrinkFreeIcons, LeafFreeIcons, MilkBottleFreeIcons, PopcornFreeIcons, Restaurant02FreeIcons, WheatFreeIcons } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { router } from 'expo-router';
import { useState } from 'react';
import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import BrandCard from './components/brand-card';
import CategoryCard from './components/category-card';
import { CategoryItem } from './types/categoriaItem.home';

// Create a list for categories
const categories: CategoryItem[] = [
  {
    id: '1',
    title: 'beverages',
    icon: <HugeiconsIcon icon={DrinkFreeIcons} size={54} color="#fff" strokeWidth={1.8} />,
    backgroundColor: '#2887c6',
  },
  {
    id: '2',
    title: 'dairies',
    icon: <HugeiconsIcon icon={MilkBottleFreeIcons} size={54} color="#fff" strokeWidth={1.8} />,
    backgroundColor: '#fee08c',
  },
  {
    id: '3',
    title: 'snacks',
    icon: <HugeiconsIcon icon={PopcornFreeIcons} size={54} color="#fff" strokeWidth={1.8} />,
    backgroundColor: '#e64172',
  },
  {
    id: '4',
    title: 'breakfasts',
    icon: <HugeiconsIcon icon={Coffee02FreeIcons} size={54} color="#fff" strokeWidth={1.8} />,
    backgroundColor: '#fa993f',
  },
  {
    id: '5',
    title: 'desserts',
    icon: <HugeiconsIcon icon={Cupcake03Icon} size={54} color="#fff" strokeWidth={1.8} />,
    backgroundColor: '#775ee7',
  },
  {
    id: '6',
    title: 'chocolates',
    icon: <HugeiconsIcon icon={ChocolateFreeIcons} size={54} color="#fff" strokeWidth={1.8} />,
    backgroundColor: '#35322f',
  },
  {
    id: '7',
    title: 'biscuits-and-cakes',
    icon: <HugeiconsIcon icon={CookieFreeIcons} size={54} color="#fff" strokeWidth={1.8} />,
    backgroundColor: '#a55a1e',
  },
  {
    id: '8',
    title: 'cereals-and-potatoes',
    icon: <HugeiconsIcon icon={WheatFreeIcons} size={54} color="#fff" strokeWidth={1.8} />,
    backgroundColor: '#258789',
  },
  {
    id: '9',
    title: 'meals',
    icon: <HugeiconsIcon icon={Restaurant02FreeIcons} size={54} color="#fff" strokeWidth={1.8} />,
    backgroundColor: '#d3372c',
  },
  {
    id: '10',
    title: 'plant-based-foods',
    icon: <HugeiconsIcon icon={LeafFreeIcons} size={54} color="#fff" strokeWidth={1.8} />,
    backgroundColor: '#32ad5f',
  },
];

// List of brands
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
    subTitle: 'pepsi',
    backgroundColor: '#ffe4cc',
  },
  {
    id: '4',
    title: 'DANONE',
    subTitle: 'danone',
    backgroundColor: '#f4ddff',
  },
  {
    id: '5',
    title: 'KELLOGGS',
    subTitle: 'kelloggs',
    backgroundColor: '#d62828',
  },
  {
    id: '6',
    title: 'UNILEVER',
    subTitle: 'unilever',
    backgroundColor: '#4da3ff',
  },
  {
    id: '7',
    title: 'MONDELEZ',
    subTitle: 'mondelez',
    backgroundColor: '#7b4dff',
  },
  {
    id: '8',
    title: 'MARS',
    subTitle: 'mars',
    backgroundColor: '#ff6b57',
  },
  {
    id: '9',
    title: 'FERRERO',
    subTitle: 'ferrero',
    backgroundColor: '#b7792b',
  },
  {
    id: '10',
    title: 'LACTAILS',
    subTitle: 'lactails',
    backgroundColor: '#8fd3ff',
  },
];

export default function HomeScreen() {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const visibleCategories = showAllCategories ? categories : categories.slice(0, 4);

  // Add type of search, limit for the 3 diferents options
  function goToSearch(query: string, searchType: 'brands' | 'labels' | 'categories') {
    if (searchType === 'brands') {
      router.push({
        pathname: '/search/brands/[brand]',
        params: {
          brand: query,
        },
      });
      return;
    }

    if (searchType === 'labels') {
      router.push({
        pathname: '/search/labels/[label]',
        params: {
          label: query,
        },
      });
      return;
    }

    router.push({
      pathname: '/search/categories/[category]',
      params: {
        category: query,
      },
    });
  }

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.eyebrow}>CURATED FLAVORS</Text>
        <Text style={styles.heroTitle}>
          The art of <Text style={styles.heroAccent}>conscious</Text> discovery.
        </Text>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <Pressable onPress={() => setShowAllCategories((current) => !current)}>
            <Text style={styles.sectionLink}>{showAllCategories ? 'Show Less' : 'View All'}</Text>
          </Pressable>
        </View>

        <FlatList
          style={styles.categoriesList}
          scrollEnabled={false}
          data={visibleCategories}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => (
            <CategoryCard
              title={item.title}
              icon={item.icon}
              backgroundColor={item.backgroundColor}
              onPress={() => goToSearch(item.title, 'categories')}
            />
          )}
        />

        <Text style={styles.sectionTitleWithMargin}>Refine by Taste</Text>

        <View style={styles.tagsContainer}>
          <Pressable style={styles.button} onPress={() => goToSearch('Organic', 'labels')}>
            <Text style={styles.textButton}>Organic</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => goToSearch('Vegan', 'labels')}>
            <Text style={styles.textButton}>Vegan</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => goToSearch('Vegetarian', 'labels')}>
            <Text style={styles.textButton}>Vegetarian</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => goToSearch('Gluten-free', 'labels')}>
            <Text style={styles.textButton}>Gluten-free</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => goToSearch('no-added-sugar', 'labels')}>
            <Text style={styles.textButton}>no-added-sugar</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => goToSearch('fair-trade', 'labels')}>
            <Text style={styles.textButton}>fair-trade</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => goToSearch('lactose-free', 'labels')}>
            <Text style={styles.textButton}>lactose-free</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => goToSearch('palm-oil-free', 'labels')}>
            <Text style={styles.textButton}>palm-oil-free</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => goToSearch('high-fiber', 'labels')}>
            <Text style={styles.textButton}>high-fiber</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => goToSearch('low-fat', 'labels')}>
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
              onPress={() => goToSearch(item.subTitle, 'brands')}
            />
          )}
        />
      </ScrollView>
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
