import { Stack } from 'expo-router';

export default function SearchLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="brands/[brand]" />
      <Stack.Screen name="labels/[label]" />
      <Stack.Screen name="categories/[category]" />
    </Stack>
  );
}
