import { ScrollView, StyleSheet, Text, View } from 'react-native';

type DetailsProductProps = {
    title: string;
    subtitle: string;
    noteNutritional: string;
    noteEcoScore: string;
    notaNova: string;
    details: string[];
}

export default function DetailsProduct({
    title, 
    subtitle, 
    noteNutritional, 
    noteEcoScore, 
    notaNova, 
    details}: DetailsProductProps) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 15, color: '#447949'}}>{title}</Text>
            <Text style={{ fontSize: 50, color: '#000000', marginBottom: 20, fontWeight: 'bold', flexShrink: 1 }}>{subtitle}</Text>
            
            <View style={{ flexDirection: 'row', marginBottom: 20, gap: 13 }}>
                <View style={styles.subContainer}>
                    <Text style={styles.nutriLabel}>NUTRI-SCORE</Text>
                    <View style={styles.nutriBadge}>
                        <Text style={styles.nutriBadgeText}>{noteNutritional}</Text>
                    </View>
                </View>

                
                <View style={styles.subContainer}>
                    <Text style={styles.nutriLabel}>NOVA GROUP</Text>
                    <View style={[styles.nutriBadge, { backgroundColor: '#f7ce46' }]}>
                        <Text style={[styles.nutriBadgeText, { color: '#000000' }]}>{notaNova}</Text>
                    </View>
                </View>

                <View style={styles.subContainer}>
                    <Text style={[styles.nutriLabel,]}>ECO-SCORE</Text>
                    <View style={[styles.nutriBadge, { backgroundColor: '#2e6c20' }]}>
                        <Text style={[styles.nutriBadgeText]}>{noteEcoScore}</Text>
                    </View>
                </View>


            </View>
            
            <ScrollView horizontal contentContainerStyle={styles.propertiesRow}>
                {details.map((detail, index) => (
                    <View key={index} style={styles.containerPropieties}>
                        <Text style={{ fontSize: 16, marginBottom: 5 }}>ENERGY</Text>
                        <Text style={{ fontSize: 16, marginBottom: 5 }}>{detail}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        backgroundColor: '#ffffff',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    subContainer: {
        backgroundColor: '#f1f2f3', 
        borderRadius: 16,
        flex: 1,
        height: 120,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    nutriLabel: {
        fontSize: 13,
        flexShrink: 1,
        marginBottom: 10,
        marginHorizontal: 10,
        color: '#060606',
        fontWeight: '600',
        textAlign: 'left',
        alignSelf: 'flex-start',
    },
    nutriBadge: {
        backgroundColor: '#107f47',
        minWidth: 46,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    nutriBadgeText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
    },
    containerPropieties:{
        backgroundColor: '#cde8c2',
        borderRadius: 4,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    propertiesRow: {
        marginTop: 20,
        flexDirection: 'row',
        gap: 10,
    }
});
