import { useRouter } from 'expo-router';
import { FlatList, StyleSheet, Text, View } from "react-native";
import ProductSheet from '../search/components/product-sheet';
import { useFavorites } from './hooks/useFavorites';

export default function FavoritesScreen () {
    const router = useRouter();
    const { favorites, loading } = useFavorites();

    return (
        <View style={styles.screenBackgroundFavorites}>
            <Text style={styles.title}>Favorites</Text>
            <Text style={styles.subtitle}>{favorites.length} items favorites</Text>
            <FlatList
                data={favorites}
                keyExtractor={(item) => item._id}
                ListEmptyComponent={!loading ? <Text>No hay productos favoritos.</Text> : null}
                renderItem={({ item }) => (
                    <ProductSheet
                        title={item.productName}
                        description={item.brands}
                        image={item.imageUrl}
                        noteNutritional={item.nutriscoreGrade}
                        noteEcoScore={item.ecoscoreGrade}
                        onPressed={() =>
                            router.push({
                                pathname: '/products/[code]',
                                params: { code: item.code },
                            })
                        }
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screenBackgroundFavorites : {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f7f8f9',
        alignItems: 'stretch',
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    title : {
        fontSize: 37,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 20,
        color: '#666',
        marginBottom: 20,
    },
});
