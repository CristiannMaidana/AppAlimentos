import { StyleSheet, Text, View } from "react-native";

export default function FavoritesScreen () {
    return (
        <View style={styles.screenBackgroundFavorites}>
            <Text style={styles.title}>Favorites</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screenBackgroundFavorites : {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f7f8f9',
        alignItems: 'stretch',
        padding: 20,
    },
    title : {
        fontSize: 37,
        fontWeight: 'bold',
        marginBottom: 5,
    }
});