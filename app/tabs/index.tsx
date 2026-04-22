import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>CURATED FLAVORS</Text>
      <Text style={{ fontSize: 30, marginTop: 16, fontWeight: 'bold' }}>
        The art of conscious discovery.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    padding: 16,
    },
});
