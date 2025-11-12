import { useState } from "react";
import { View, Text, TextInput, Alert, TouchableOpacity } from "react-native";
import estilos from "../estilos/estilosApp";

export default function Formulario({ total, vaciarCarrito }) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [metodoPago, setMetodoPago] = useState("");
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  const validarFormulario = () => {
    if (!nombre || !email || !telefono || !direccion || !metodoPago) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return false;
    }
    if (!email.includes("@")) {
      Alert.alert("Error", "Email inválido");
      return false;
    }
    if (isNaN(telefono)) {
      Alert.alert("Error", "Teléfono debe ser numérico");
      return false;
    }
    return true;
  };

  const confirmarPedido = () => {
    if (validarFormulario()) {
      Alert.alert("¡Pedido confirmado!");
      vaciarCarrito();
      setNombre("");
      setEmail("");
      setTelefono("");
      setDireccion("");
      setMetodoPago("");
      setAceptaTerminos(false);
    }
  };

  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.texto}>Total: ${Math.round(total)}</Text>
      <Text style={estilos.texto}>Envío: ${total > 600 ? "120" : "0"}</Text>

      <TextInput
        style={estilos.input}
        placeholder="Nombre"
        placeholderTextColor="#a6a6a6ff"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={estilos.input}
        placeholder="Email"
        placeholderTextColor="#a6a6a6ff"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={estilos.input}
        placeholder="Teléfono"
        placeholderTextColor="#a6a6a6ff"
        keyboardType="numeric"
        value={telefono}
        onChangeText={setTelefono}
      />
      <TextInput
        style={estilos.input}
        placeholder="Dirección"
        placeholderTextColor="#a6a6a6ff"
        value={direccion}
        onChangeText={setDireccion}
      />

      <Text style={estilos.texto}>Método de pago:</Text>
      {["Tarjeta", "Efectivo", "Transferencia"].map((opcion) => (
        <TouchableOpacity
          key={opcion}
          style={estilos.radio}
          onPress={() => setMetodoPago(opcion)}
        >
          <Text style={{ color: metodoPago === opcion ? "blue" : "black" }}>
            {metodoPago === opcion ? "●" : "○"} {opcion}
          </Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={estilos.checkbox}
        onPress={() => setAceptaTerminos(!aceptaTerminos)}
      >
        <Text>
          {aceptaTerminos ? "☑" : "☐"} Acepto términos y condiciones
        </Text>
      </TouchableOpacity>

      {aceptaTerminos && (
        <TouchableOpacity style={estilos.botonConfirmar} onPress={confirmarPedido}>
          <Text style={estilos.textoBotonConfirmar}>Confirmar pedido</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
