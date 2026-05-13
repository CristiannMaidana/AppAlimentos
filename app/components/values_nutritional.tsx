import { StyleSheet, Text, View } from 'react-native';


type ValuesNutritionalProps = {
    energy: string;
    fat: string;
    saturatedFat: string;
    carbohydrates: string;
    sugars: string;
    fiber: string;
    proteins: string;
    salt: string;
    valueNutritional: string;
}

export default function ValuesNutritional({
    energy, 
    fat, 
    saturatedFat, 
    carbohydrates, 
    sugars, 
    fiber, 
    proteins, 
    salt, 
    valueNutritional}: ValuesNutritionalProps) {
    return (
        <View style={styles.containerNutritionalValue}>
            <Text>Nutritional Values({valueNutritional})</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    containerNutritionalValue: {
        borderWidth: 1,
        borderColor: '#e0e0e0',
        backgroundColor: '#ffff',
        borderRadius: 30,
        alignItems: 'center',
        margin: 20,
    },
});