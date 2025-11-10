import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import estilos from "../estilos/estilosApp";

export default function Filtrado({ productos, filtrar }) {
  const [buscado, setBuscado] = useState("");

  const mostrarTodos = () => {
    filtrar(productos);
  }

  return (
    <View style={estilos.contenedor}>
      <TextInput 
        style={estilos.buscador}
        placeholder="Buscar..."
        placeholderTextColor={'#7c7c7cff'}
        onChangeText={(texto) => {
            setBuscado(texto);
            const producto = texto.charAt(0).toUpperCase() + texto.slice(1);
            filtrar(texto ? productos.filter((p) => p.name.includes(producto)) : productos);
        }}
      />
      <Button
        title="Café"
        onPress={() =>
          filtrar(productos.filter((p) => p.category === "Café"))
        }
      />
      <Button
        title="Té"
        onPress={() =>
          filtrar(productos.filter((p) => p.category === "Té"))
        }
      />
      <Button
        title="Pastelería"
        onPress={() =>
          filtrar(productos.filter((p) => p.category === "Pastelería"))
        }
      />
      <Button
        title="Sándwiches"
        onPress={() =>
          filtrar(productos.filter((p) => p.category === "Sándwiches"))
        }
      />
      <Button title="Mostrar todo" onPress={mostrarTodos} />
    </View>
  );
}
