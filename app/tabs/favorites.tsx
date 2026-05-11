import { Image, ScrollView, View } from 'react-native';
import DetailsProduct from '../components/details_product';

export default function FavoritesScreen() {
    return (
    <View>
        <Image style={{ height: 300, backgroundColor: '#f16558'}}></Image>
        <ScrollView style={{ backgroundColor: '#f5f6f7', paddingHorizontal: 20 }}>
            <DetailsProduct 
                title="OATLY"
                subtitle="The Original Oatly Oat Milk"
                noteNutritional="A"
                noteEcoScore="A"
                notaNova="1"
                details={["193 kJ", "1.5 g", "1.0g", "detail1"]}
            />
        </ScrollView>
    </View>
    );
}
