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
    const nutritionalRows = [
        { label: 'Nutritional Values', value: `(${valueNutritional})` },
        { label: 'Energy', value: energy },
        { label: 'Fat', value: fat },
        { label: 'Saturated Fat', value: saturatedFat },
        { label: 'Carbohydrates', value: carbohydrates },
        { label: 'Sugars', value: sugars },
        { label: 'Fiber', value: fiber },
        { label: 'Proteins', value: proteins },
        { label: 'Salt', value: salt },
    ];

    return (
        <View style={styles.containerNutritionalValue}>
            {nutritionalRows.map((item) => (
                <View key={item.label} style={styles.row}>
                    <Text style={styles.label}>{item.label}</Text>
                    <Text style={styles.value}>{item.value}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    containerNutritionalValue: {
        borderWidth: 1,
        borderColor: '#e0e0e0',
        backgroundColor: '#ffff',
        borderRadius: 30,
        margin: 20,
        paddingHorizontal: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    label: {
        fontSize: 16,
        color: '#000000',
    },
    value: {
        fontSize: 16,
        color: '#666666',
    },
});
