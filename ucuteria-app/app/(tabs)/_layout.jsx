import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Platform } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#7814a2ff' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          headerTitleStyle: {fontFamily: Platform.OS === "android" ? "monospace" : "Avenir"},
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color}/>,
        }}
      />
      <Tabs.Screen
        name="carrito"
        options={{
          title: 'Carrito',
          headerTitleStyle: {fontFamily: Platform.OS === "android" ? "monospace" : "Avenir"},
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cart-arrow-down" color={color} />,
        }}
      />
    </Tabs>
  );
}