import { router } from 'expo-router';

import LoginScreen from '@/features/auth/login-screen';

export default function AuthRoute() {
  return <LoginScreen onSuccess={() => router.back()} />;
}
