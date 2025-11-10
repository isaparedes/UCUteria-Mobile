import { useContext } from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import estilos from "../estilos/estilosApp";
import { CarritoContext } from "../contexts/CarritoContext";

export default function Lista() {
  const { carrito, agregarProducto, quitarUno } = useContext(CarritoContext);

  return (
    <View style={estilos.contenedor}>
      <ScrollView style={estilos.lista}>
        {carrito.map((i, index) => (
          <View key={index} style={estilos.producto}>
            <Text style={[estilos.tituloProducto, estilos.texto]}>{i.name}</Text>
            <Text style={estilos.texto}>${i.price * i.quantity}</Text>

            <View style={estilos.botonesPequenosFila}>
              <TouchableOpacity
                style={estilos.botonMenos}
                onPress={() => quitarUno(i)}
              >
                <Text style={estilos.textoBotonPequeno}>-</Text>
              </TouchableOpacity>

              <Text style={estilos.texto}>{i.quantity}</Text>

               <TouchableOpacity
                style={estilos.botonMas}
                onPress={() => agregarProducto(i)}
              >
                <Text style={estilos.textoBotonPequeno}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
