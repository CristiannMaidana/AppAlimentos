import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

type ProductSheetProps = {
    itemSearch: string;
    onSearch: (text: string) => void;
};

export default function SearchBar({ itemSearch, onSearch }: ProductSheetProps) {
    return (
        <View style={styles.container}>
            <Ionicons name="search" size={24} color="#94959e" style={{ marginLeft: 10 }} />
            <Text style={styles.text}>Search juices, craft sodas, teas...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f1f2f3',
        borderRadius: 14,
        paddingHorizontal: 10,
        height: 60,
    },
    text: {
        fontSize: 20,
        color: '#94959e',
        marginLeft: 10,
    },
});