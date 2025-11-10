import { View, Text } from "react-native";
import estilos from "./estilos/estilosApp";
import { CarritoContext } from "./contexts/CarritoContext";
import Formulario from "./components/Formulario";
import { useContext } from "react";



export default function Checkout() {

    const { calcularSubtotal } = useContext(CarritoContext);


    return (
        <View style={estilos.contenedor}>
            <Formulario
                total={calcularSubtotal()*1.22}
            />
        </View>
    )
}