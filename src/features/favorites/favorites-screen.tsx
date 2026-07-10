import { StyleSheet, View } from "react-native";

export default function FavoritesScreen () {
    return (
        <View style={styles.screenBackgroundFavorites}>

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
    }
});