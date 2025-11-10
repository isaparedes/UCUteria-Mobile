import { useContext } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useLocalSearchParams } from "expo-router";
import estilos from "../estilos/estilosApp";
import database from "../database/db.json";
import { CarritoContext } from "../contexts/CarritoContext";

export default function Producto() {
  const { id } = useLocalSearchParams();
  const producto = database.products.find((p) => p.id.toString() === id);
  const { agregarProducto, quitarProducto, verificarExistencia, quitarUno } =
    useContext(CarritoContext);

  return (
    <View style={estilos.contenedor}>
      <View style={estilos.producto}>
        <Text style={[estilos.texto, estilos.tituloProducto]}>
          {producto.name}
        </Text>
        <Text style={estilos.texto}>${producto.price}</Text>
        <Text style={estilos.texto}>{producto.category}</Text>
        <Text style={estilos.texto}>{producto.desc}</Text>
        <Text style={estilos.texto}>{producto.img}</Text>
      </View>

      {verificarExistencia(producto) > 0 ? (
        <View>
          <TouchableOpacity
            style={estilos.botonCarrito}
            onPress={() => quitarProducto(producto)}
          >
            <Text style={[estilos.texto, estilos.textoBotonCarrito]}>
              Quitar
            </Text>
          </TouchableOpacity>

          <View style={estilos.botonesPequenosFila}>
            <TouchableOpacity
              style={estilos.botonMenos}
              onPress={() => quitarUno(producto)}
            >
              <Text style={estilos.textoBotonPequeno}>-</Text>
            </TouchableOpacity>

            <Text style={estilos.texto}>
              Cantidad: {verificarExistencia(producto)}
            </Text>

            <TouchableOpacity
              style={estilos.botonMas}
              onPress={() => agregarProducto(producto)}
            >
              <Text style={estilos.textoBotonPequeno}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <TouchableOpacity
          style={estilos.botonCarrito}
          onPress={() => agregarProducto(producto)}
        >
          <Text style={[estilos.texto, estilos.textoBotonCarrito]}>
            Agregar
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
