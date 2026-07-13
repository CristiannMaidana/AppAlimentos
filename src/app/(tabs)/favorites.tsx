import { ActivityIndicator, StyleSheet, View } from 'react-native';

import LoginScreen from '@/features/auth/login-screen';
import FavoritesScreen from '@/features/favorites/favorites-screen';
import { authClient } from '@/lib/auth/auth-client';

export default function FavoritesRoute() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator color="#2F6B3B" size="large" />
      </View>
    );
  }
  // TODO: change it for a route of auth
  if (!session) {
    return <LoginScreen />;
  }

  return <FavoritesScreen />;
}

const styles = StyleSheet.create({
  loading: {
    alignItems: 'center',
    backgroundColor: '#F5F7F2',
    flex: 1,
    justifyContent: 'center',
  },
});
