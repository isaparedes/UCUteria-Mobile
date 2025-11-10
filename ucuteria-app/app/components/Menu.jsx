import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import estilos from "../estilos/estilosApp";

export default function Menu({ productos, navegar }) {
  return (
    <View style={estilos.contenedor}>
      <ScrollView style={estilos.lista}>
        {productos.map((p) => (
          <TouchableOpacity
            key={p.id}
            style={estilos.productoFila}
            onPress={() => navegar(p.id)}
          >
            <View style={estilos.infoIzquierda}>
              <Text style={[estilos.texto, estilos.tituloProducto]}>
                {p.name}
              </Text>
              <Text style={estilos.texto}>${p.price}</Text>
              <Text style={[estilos.texto, estilos.categoria]}>{p.category}</Text>
            </View>

            <View style={estilos.imagenDerecha}>
              <Text style={[estilos.imagen]}>{p.img}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
