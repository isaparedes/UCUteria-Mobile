import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import estilos from "../estilos/estilosApp";

export default function Menu({productos, navegar}) {

    return (
        <View style={estilos.contenedor}>
            <ScrollView>
                {productos.map((p) => (
                    <TouchableOpacity 
                        key={p.id}
                        onPress={() => navegar(p.id)}
                        >
                        <Text>{p.name}</Text>
                        <Text>${p.price}</Text>
                        <Text>{p.category}</Text>
                        <Text>{p.img}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}