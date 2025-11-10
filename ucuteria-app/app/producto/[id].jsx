import { useContext } from "react";
import { Text, View, Button } from "react-native";
import { useLocalSearchParams } from "expo-router";
import estilos from "../estilos/estilosApp";
import database from "../database/db.json";
import { CarritoContext } from "../contexts/CarritoContext";


export default function Producto() {

    const { id } = useLocalSearchParams();
    const producto = database.products.find((p) => p.id.toString() === id);
    const { carrito, agregarProducto, quitarProducto, verificarExistencia, quitarUno } = useContext(CarritoContext);

    return (
        <View style={estilos.contenedor}>
            <Text>{producto.name}</Text>
            <Text>${producto.price}</Text>
            <Text>{producto.category}</Text>
            <Text>{producto.img}</Text>
            <Text>{producto.desc}</Text>
            {verificarExistencia(producto) > 0 ? (
                <View>
                    <Button
                        title="Quitar"
                        onPress={() => quitarProducto(producto)}
                    />
                    <Button
                        title="+"
                        onPress={() => agregarProducto(producto)}
                    />
                    <Button
                        title="-"
                        onPress={() => quitarUno(producto)}
                    />
                    <Text>Cantidad: {verificarExistencia(producto)}</Text>
                </View>
                ) : (
                <Button 
                    title="Agregar"
                    onPress={() => agregarProducto(producto)}
                />
                )  
            }
        </View>
    )

}