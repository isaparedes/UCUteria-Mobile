import { View, Text } from "react-native";
import estilos from "../estilos/estilosApp";

export default function Formulario({total}) {
    return (
        <View style={estilos.contenedor}>
            <Text>Completar esta parte</Text>
            <Text>Total: ${total}</Text>
            <Text>Envío: ${total > 600 ? "120" : "0"}</Text>
        </View>
    )
}