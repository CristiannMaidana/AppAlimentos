import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { useAuthForm } from './hooks/use-auth-form';

type LoginScreenProps = {
  onSuccess?: () => void;
};

export default function LoginScreen({ onSuccess = () => undefined }: LoginScreenProps) {
  const form = useAuthForm(onSuccess);
  const isSignUp = form.mode === 'sign-up';

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}>
        <View style={styles.card}>
          <View style={styles.logo}><Text style={styles.logoText}>F</Text></View>
          <Text style={styles.title}>{isSignUp ? 'Creá tu cuenta' : 'Bienvenido'}</Text>
          <Text style={styles.subtitle}>
            {isSignUp ? 'Registrate para guardar tus alimentos favoritos.' : 'Ingresá para poder guardar tus alimentos favoritos en FoodApp.'}
          </Text>

          {isSignUp && (
            <View style={styles.field}>
              <Text style={styles.label}>Nombre</Text>
              <TextInput
                autoCapitalize="words"
                editable={!form.loading}
                onChangeText={form.setName}
                placeholder="Usuario de prueba"
                style={styles.input}
                value={form.name}
              />
            </View>
          )}

          <View style={styles.field}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              autoCapitalize="none"
              autoComplete="email"
              editable={!form.loading}
              keyboardType="email-address"
              onChangeText={form.setEmail}
              placeholder="test@example.com"
              style={styles.input}
              value={form.email}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Contraseña</Text>
            <TextInput
              autoCapitalize="none"
              autoComplete={isSignUp ? 'new-password' : 'current-password'}
              editable={!form.loading}
              onChangeText={form.setPassword}
              onSubmitEditing={() => void form.submit()}
              placeholder="Mínimo 8 caracteres"
              secureTextEntry
              style={styles.input}
              value={form.password}
            />
          </View>

          {form.error && <Text style={styles.error}>{form.error}</Text>}

          <Pressable
            disabled={form.loading}
            onPress={() => void form.submit()}
            style={({ pressed }) => [styles.button, pressed && styles.buttonPressed, form.loading && styles.buttonDisabled]}>
            {form.loading
              ? <ActivityIndicator color="#fff" />
              : <Text style={styles.buttonText}>{isSignUp ? 'Crear cuenta' : 'Iniciar sesión'}</Text>}
          </Pressable>

          <Pressable
            disabled={form.loading}
            onPress={() => form.changeMode(isSignUp ? 'sign-in' : 'sign-up')}
            style={styles.switchButton}>
            <Text style={styles.switchText}>
              {isSignUp ? '¿Ya tenés una cuenta? ' : '¿No tenés una cuenta? '}
              <Text style={styles.switchLink}>{isSignUp ? 'Ingresá' : 'Registrate'}</Text>
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { 
    flex: 1, 
    backgroundColor: '#F5F7F2' 
},
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 24 
},
  card: { 
    backgroundColor: '#FFF', 
    borderRadius: 24, 
    padding: 24, 
    shadowColor: '#17210F', 
    shadowOpacity: 0.08, 
    shadowRadius: 20, 
    shadowOffset: { 
        width: 0, 
        height: 8 
    }, 
    elevation: 4 
},
  logo: { 
    alignItems: 'center', 
    alignSelf: 'center', 
    backgroundColor: '#2F6B3B', 
    borderRadius: 18, 
    height: 56, 
    justifyContent: 'center', 
    marginBottom: 20, 
    width: 56 
},
  logoText: { 
    color: '#FFF', 
    fontSize: 28, 
    fontWeight: '800' 
},
  title: { 
    color: '#182217', 
    fontSize: 28, 
    fontWeight: '800', 
    textAlign: 'center' 
},
  subtitle: { 
    color: '#647063', 
    fontSize: 15, 
    lineHeight: 22, 
    marginBottom: 24, 
    marginTop: 8, 
    textAlign: 'center' 
},
  field: { 
    marginBottom: 16 
},
  label: { 
    color: '#344133', 
    fontSize: 14, 
    fontWeight: '600', 
    marginBottom: 7 
},
  input: { 
    backgroundColor: '#F8FAF7', 
    borderColor: '#DCE4D9', 
    borderRadius: 12, 
    borderWidth: 1, 
    color: '#182217', 
    fontSize: 16, 
    minHeight: 50, 
    paddingHorizontal: 14 
},
  error: { 
    backgroundColor: '#FFF1F0', 
    borderRadius: 10, 
    color: '#B42318', 
    fontSize: 14, 
    marginBottom: 16, 
    padding: 12 
},
  button: { 
    alignItems: 'center', 
    backgroundColor: '#2F6B3B', 
    borderRadius: 12, 
    justifyContent: 'center', 
    minHeight: 52, 
    marginTop: 2 
},
  buttonPressed: { 
    opacity: 0.85 
},
  buttonDisabled: { 
    opacity: 0.65 
},
  buttonText: { 
    color: '#FFF', 
    fontSize: 16, 
    fontWeight: '700' 
},
  switchButton: { 
    alignItems: 'center', 
    marginTop: 20, 
    padding: 4 
},
  switchText: { 
    color: '#647063', 
    fontSize: 14 
},
  switchLink: { 
    color: '#2F6B3B', 
    fontWeight: '700' 
},
});
