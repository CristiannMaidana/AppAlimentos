import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type ProductSheetProps = {
  title: string;
  description: string;
  image?: string;
  noteNutritional?: string;
  noteEcoScore?: string;
  onPressed: () => void;
};

export default function ProductSheet({
  title,
  description,
  image,
  noteNutritional,
  noteEcoScore,
  onPressed,
}: ProductSheetProps) {
  return (
    <Pressable style={styles.container} onPress={onPressed}>
      <View style={{flexDirection: 'row'}}>
        {/* Image placeholder */}
        <View style={{ width: 90, height: 90, backgroundColor: '#f1f2f3', borderRadius: 8, alignSelf: 'center' }}>{image}</View> 
        
        {/* Text content */}
        <View style={{ flex: 1, marginHorizontal: 16}}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', flexShrink: 1,}}>{title}</Text>

            <Text style={{ fontSize: 16, color: '#666',}}>{description}</Text>

            <View style={{ marginTop: 14, flexDirection: 'row', alignItems: 'center'}}>
                <View style={{ backgroundColor: '#1d9848', ...styles.subContainer }}>
                    <Text style={{ fontSize: 13, color: '#ffff', fontWeight: 'bold' }}>NUTRI-SCORE {noteNutritional}</Text>
                </View>

                <View style={{ backgroundColor: '#bfe5b9', ...styles.subContainer }}>
                    <Text style={{ fontSize: 13, color: '#4f6a4d', fontWeight: 'bold' }}>ECO-SCORE {noteEcoScore}</Text> 
                </View>
            </View>
        </View>

        {/* Icon */}
        <Ionicons name="chevron-forward" size={27} color="#ceced2" style={{ marginLeft: 10, alignSelf: 'center' }} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    margin: 20,
    width: '100%',
    padding: 16,
    borderColor: '#ebedee',
    borderWidth: .49,
  },

  subContainer: {
    borderRadius: 3, 
    paddingHorizontal: 10, 
    paddingVertical: 4, 
    marginRight: 10,
    height: 45,
    width: 100,
  },
});
