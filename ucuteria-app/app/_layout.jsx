import { Stack } from 'expo-router';
import { CarritoProvider } from './contexts/CarritoContext';

export default function RootLayout() {
  return (
    <CarritoProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        <Stack.Screen name="producto/[id]" options={{headerTitle: "", headerBackTitle: "Menú" }} />

        <Stack.Screen name="checkout" options={{ presentation: "modal", title: "Checkout" }} />
      </Stack>
    </CarritoProvider>
  );
}
