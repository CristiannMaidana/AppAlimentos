import { StyleSheet, Text, View } from 'react-native';

type ValuesNutritionalProps = {
  energy: string;
  fat: string;
  carbohydrates: string;
  fiber: string;
  proteins: string;
  salt: string;
  valueNutritional: string;
};

export default function ValuesNutritional({
  energy,
  fat,
  carbohydrates,
  fiber,
  proteins,
  salt,
  valueNutritional,
}: ValuesNutritionalProps) {
  const nutritionalRows: { label: string; value: string; indented?: boolean }[] = [
    { label: 'Nutritional Values', value: `(${valueNutritional})` },
    { label: 'Energy', value: energy },
    { label: 'Fat', value: fat },
    { label: 'Carbohydrates', value: carbohydrates },
    { label: 'Fiber', value: fiber },
    { label: 'Proteins', value: proteins },
    { label: 'Salt', value: salt },
  ];

  return (
    <View style={styles.containerNutritionalValue}>
      {nutritionalRows.map((item, index) => (
        <View
          key={item.label}
          style={[
            styles.row,
            (index === 0 || index === nutritionalRows.length - 1) && styles.rowWithoutBorder,
          ]}>
          <Text style={[styles.label, item.indented && styles.labelIndented]}>{item.label}</Text>
          <Text style={styles.value}>{item.value}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  containerNutritionalValue: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: '#ffff',
    borderRadius: 30,
    margin: 20,
    paddingHorizontal: 35,
    paddingVertical: 25,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  rowWithoutBorder: {
    borderBottomWidth: 0,
  },
  label: {
    fontSize: 16,
    color: '#000000',
  },
  labelIndented: {
    paddingLeft: 16,
  },
  value: {
    fontSize: 16,
    color: '#666666',
  },
});
