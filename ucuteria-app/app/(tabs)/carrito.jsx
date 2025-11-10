import { useContext, useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import estilos from "../estilos/estilosApp";
import { CarritoContext } from "../contexts/CarritoContext";
import Lista from "../components/Lista";

export default function Carrito() {
  const { carrito, vaciarCarrito, aplicarCupon, cupon, calcularSubtotal } =
    useContext(CarritoContext);
  const [posibleCupon, setPosibleCupon] = useState("");
  const router = useRouter();

  const navegarAlEnvio = () => {
    router.navigate({ pathname: "/checkout" });
  };

  return (
    <View style={estilos.contenedor}>
      <Lista />

      <Text style={[estilos.texto, {marginBottom: 10}]}>Subtotal: ${calcularSubtotal()}</Text>

      {cupon ? (
        <Text style={[estilos.texto]}>Descuento aplicado</Text>
      ) : (
        <>
          <TextInput
            style={estilos.buscador}
            placeholder="Ingresar cupón..."
            value={posibleCupon}
            onChangeText={setPosibleCupon}
          />
          <TouchableOpacity
            style={estilos.botonCarrito}
            onPress={() => {
              aplicarCupon(posibleCupon);
              setPosibleCupon("");
            }}
          >
            <Text style={[estilos.texto, estilos.textoBotonCarrito]}>
              Aplicar cupón
            </Text>
          </TouchableOpacity>
        </>
      )}

      <TouchableOpacity style={estilos.botonCarrito} onPress={vaciarCarrito}>
        <Text style={[estilos.texto, estilos.textoBotonCarrito]}>Vaciar</Text>
      </TouchableOpacity>

      {carrito.length > 0 && (
        <TouchableOpacity style={estilos.botonCarrito} onPress={navegarAlEnvio}>
          <Text style={[estilos.texto, estilos.textoBotonCarrito]}>
            Ir a pagar
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
