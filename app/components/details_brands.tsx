import { Pressable, StyleSheet, Text, View } from 'react-native';

type CustomCardProps = {
    title: string;
    subTitle: string;
    backgroundColor: string;
    onPress: () => void;
};

export default function CustomCard({
    title,
    subTitle,
    backgroundColor,
    onPress,
}: CustomCardProps) {
    return (
    <Pressable
      onPress={onPress}
      style={[styles.card]}
    >
      <View style={{borderRadius: 50, backgroundColor: backgroundColor, height: 90, width: 90, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold', textAlign: 'center'}}>{title}</Text>
      </View>
      <Text style={styles.title}>{subTitle}</Text>
    </Pressable>
  );
}

// Styles for the CustomCard component
const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    height: 200,
    flex: 1,
    margin: 8,
    borderRadius: 20,
    backgroundColor: '#F3F4F5',
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
  },
});