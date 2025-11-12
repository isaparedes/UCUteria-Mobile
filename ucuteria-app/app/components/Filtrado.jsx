import { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import estilos from "../estilos/estilosApp";

export default function Filtrado({ productos, filtrar }) {
  const mostrarTodos = () => filtrar(productos);

  const filtroConInput = (texto) => {
    const producto = texto.charAt(0).toUpperCase() + texto.slice(1);
    filtrar(
      texto
        ? productos.filter(
            (p) => p.desc.includes(producto) || p.name.includes(producto)
          )
        : productos
    );
  };

  return (
    <View style={estilos.contenedor}>
      <TextInput
        style={estilos.buscador}
        placeholder="Buscar..."
        placeholderTextColor={"#7c7c7cff"}
        onChangeText={(texto) => filtroConInput(texto)}
      />

      <TouchableOpacity
        style={estilos.botonFiltro}
        onPress={() => filtrar(productos.filter((p) => p.category === "Café"))}
      >
        <Text style={[estilos.texto, estilos.textoBotonFiltro]}>Café</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={estilos.botonFiltro}
        onPress={() => filtrar(productos.filter((p) => p.category === "Té"))}
      >
        <Text style={[estilos.texto, estilos.textoBotonFiltro]}>Té</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={estilos.botonFiltro}
        onPress={() =>
          filtrar(productos.filter((p) => p.category === "Pastelería"))
        }
      >
        <Text style={[estilos.texto, estilos.textoBotonFiltro]}>
          Pastelería
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={estilos.botonFiltro}
        onPress={() =>
          filtrar(productos.filter((p) => p.category === "Sándwiches"))
        }
      >
        <Text style={[estilos.texto, estilos.textoBotonFiltro]}>
          Sándwiches
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilos.botonFiltro} onPress={mostrarTodos}>
        <Text style={[estilos.texto, estilos.textoBotonFiltro]}>Todo</Text>
      </TouchableOpacity>
    </View>
  );
}
