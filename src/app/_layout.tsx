import { ConvexBetterAuthProvider } from '@convex-dev/better-auth/react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { authClient } from '@/lib/auth/auth-client';
import { convexClient } from '@/providers/ConvexClientProvider';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <ConvexBetterAuthProvider client={convexClient} authClient={authClient}>
        <Stack screenOptions={{
          headerBackButtonDisplayMode: 'minimal',
          headerTitle: '',
        }}>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
        </Stack>
      </ConvexBetterAuthProvider>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
