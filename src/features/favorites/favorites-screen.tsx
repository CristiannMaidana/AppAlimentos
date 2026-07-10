import { StyleSheet, Text, View } from "react-native";

export default function FavoritesScreen () {
    return (
        <View style={styles.screenBackgroundFavorites}>
            <Text style={styles.title}>Favorites</Text>
            {/* TODO: cambiar a texto dinamico en base a lo que tenga el usuario */}
            <Text style={styles.subtitle}>2 items favoritos</Text>
            <Text style={styles.subtitle}>Productos:</Text>
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
    },
    subtitle: {
        fontSize: 20,
        color: '#666',
        marginBottom: 20,
    },
});