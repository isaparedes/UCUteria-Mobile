import { View, Text } from "react-native";
import estilos from "../estilos/estilosApp";

export default function Formulario({total}) {
    return (
        <View style={estilos.contenedor}>
            {/*<Text style={estilos.texto}>Completar esta parte</Text>*/}
            <Text style={estilos.texto}>Total: ${Math.round(total)}</Text>
            <Text style={estilos.texto}>Envío: ${total > 600 ? "120" : "0"}</Text>
        </View>
    )
}