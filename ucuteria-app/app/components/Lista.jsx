import { useContext} from "react";
import { Text, View, ScrollView, Button} from "react-native";
import estilos from "../estilos/estilosApp";
import { CarritoContext } from "../contexts/CarritoContext";

export default function Lista() {

    const { carrito, agregarProducto, quitarUno} = useContext(CarritoContext);

    return (
        <View style={estilos.contenedor}>
            <ScrollView>
                {carrito.map((i, index) => (
                    <View key={index}>
                    <Text>{i.name}</Text>
                    <Text>${i.price*i.quantity}</Text>
                    <Button
                        title="+"
                        onPress={() => agregarProducto(i)}
                    />
                    <Text>{i.quantity}</Text>
                    <Button
                        title="-"
                        onPress={() => quitarUno(i)}
                    />
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}