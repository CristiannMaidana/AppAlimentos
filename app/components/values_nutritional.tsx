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
            <Text style={styles.text}>Nutritional Values({valueNutritional})</Text>
            <Text style={styles.text}>Energy {energy}</Text>
            <Text style={styles.text}>Fat {fat}</Text>
            <Text style={styles.text}>Saturated Fat {saturatedFat}</Text>
            <Text style={styles.text}>Carbohydrates {carbohydrates}</Text>
            <Text style={styles.text}>Sugars {sugars}</Text>
            <Text style={styles.text}>Fiber {fiber}</Text>
            <Text style={styles.text}>Proteins {proteins}</Text>
            <Text style={styles.text}>Salt {salt}</Text>
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
    text: {
        fontSize: 16,
        margin: 10,
    },
});