import { authClient } from '@/lib/auth/auth-client';

export type SignInInput = {
  email: string;
  password: string;
};

export type SignUpInput = SignInInput & {
  name: string;
};

export async function signIn(input: SignInInput) {
  const result = await authClient.signIn.email(input);

  if (result.error) {
    throw new Error(result.error.message ?? 'No se pudo iniciar sesión.');
  }

  return result.data;
}

export async function signUp(input: SignUpInput) {
  const result = await authClient.signUp.email(input);

  if (result.error) {
    throw new Error(result.error.message ?? 'No se pudo crear la cuenta.');
  }

  return result.data;
}
