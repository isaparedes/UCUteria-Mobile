import { useContext, useState } from "react";
import { Text, View, Button, TextInput } from "react-native";
import { useRouter } from 'expo-router';
import estilos from "../estilos/estilosApp";
import { CarritoContext } from "../contexts/CarritoContext";
import Lista from "../components/Lista";

export default function Carrito() {

  const { carrito, vaciarCarrito, aplicarCupon, cupon, calcularSubtotal} = useContext(CarritoContext);
  const [ posibleCupon, setPosibleCupon ] = useState("");
  const router = useRouter();

  const navegarAlEnvio = () => {
    router.navigate({ pathname: "/checkout" });
  };

  return (
    <View style={estilos.contenedor}>

      <Lista/>

      <Text>Subtotal: ${calcularSubtotal()}</Text>
      {cupon ? (
        <Text>Descuento aplicado</Text>
      ) : (
      <>
        <TextInput
          style={estilos.buscador}
          placeholder="Ingresar cupon"
          value={posibleCupon}
          onChangeText={setPosibleCupon}
          >
        </TextInput>
        <Button
          title="Aplicar cupón"
          onPress={() => {
              aplicarCupon(posibleCupon)
              setPosibleCupon("");
            }
          }
        />
      </>
      )}
      <Button 
        title="Vaciar"
        onPress={vaciarCarrito}
      />
      {carrito.length > 0 && 
        <Button
          title="Ir a pagar"
          onPress={navegarAlEnvio}
        />
      }
    </View>
  );
}


