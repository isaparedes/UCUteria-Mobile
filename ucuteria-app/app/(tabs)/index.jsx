import { useState } from "react";
import { Text, View, ScrollView } from "react-native";
import { useRouter } from 'expo-router';
import estilos from "../estilos/estilosApp";
import database from "../database/db.json";
import Filtrado from "../components/Filtrado";
import Menu from "../components/Menu";

export default function Index() {

  database.products.sort((a, b) => a.name.localeCompare(b.name));


  /* Por precio: productos.sort(function(a, b) { return a.price - b.price; }); */
  const todos = database.products;
  const [productos, setProductos] = useState(database.products);
  const router = useRouter();

  const navegarAlProducto = (id) => {
    router.navigate({ pathname: "/producto/[id]", params: { id } });
  };

  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}>Menú</Text>
      <ScrollView style={{ width: "100%" }}>
        <Filtrado productos={todos} filtrar={setProductos} />
        <Menu navegar={navegarAlProducto} productos={productos} />
      </ScrollView>
    </View>
  );
}
