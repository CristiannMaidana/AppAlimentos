import { useState } from 'react';

import { signIn, signUp } from '../services/auth.service';

export type AuthMode = 'sign-in' | 'sign-up';

export function useAuthForm(onSuccess: () => void) {
  const [mode, setMode] = useState<AuthMode>('sign-in');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('test@example.com');
  const [password, setPassword] = useState('password-seguro-123');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit() {
    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail || !password || (mode === 'sign-up' && !name.trim())) {
      setError('Completá todos los campos.');
      return;
    }

    try {
      setLoading(true);
      setError(null);

      if (mode === 'sign-up') {
        await signUp({ name: name.trim(), email: normalizedEmail, password });
      } else {
        await signIn({ email: normalizedEmail, password });
      }

      onSuccess();
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'Ocurrió un error inesperado.');
    } finally {
      setLoading(false);
    }
  }

  function changeMode(nextMode: AuthMode) {
    setMode(nextMode);
    setError(null);
  }

  return {
    mode, name, email, password, loading, error,
    setName, setEmail, setPassword, changeMode, submit,
  };
}
