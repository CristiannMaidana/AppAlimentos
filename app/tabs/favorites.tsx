import { Image, ScrollView, StyleSheet, View } from 'react-native';
import DetailsProduct from '../components/details_product';

export default function FavoritesScreen() {
    return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        <Image style={styles.image} />
        <View style={styles.bottomSection}>
            <View style={styles.detailsWrapper}>
                <DetailsProduct 
                    title="OATLY"
                    subtitle="The Original Oatly Oat Milk"
                    noteNutritional="A"
                    noteEcoScore="A"
                    notaNova="1"
                    details={["193 kJ", "1.5 g", "1.0g", "detail1"]}
                />
            </View>
        </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f6f7',
    },
    image: {
        height: 300,
        backgroundColor: '#f16558',
    },
    scrollContent: {
        paddingBottom: 20,
    },
    bottomSection: {
        backgroundColor: '#f5f6f7',
    },
    detailsWrapper: {
        marginTop: -40,
        paddingHorizontal: 20,
        zIndex: 1,
    },
});
