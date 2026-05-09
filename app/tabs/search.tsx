import { StyleSheet, Text, View } from 'react-native';

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, marginBottom: 20 }}>
        Search
      </Text>
      <Text style={{ fontSize: 16 }}>
        Explore the world of food through the lens of quality
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});