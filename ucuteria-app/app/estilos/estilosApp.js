import { StyleSheet, Dimensions, Platform } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },

  texto: {
    fontSize: 16,
    color: "#444",
    textAlign: "center",
    fontFamily: Platform.OS === "android" ? "monospace" : "Avenir",
  },

  titulo: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    marginBottom: 6,
    fontFamily: Platform.OS === "android" ? "monospace" : "Avenir",
  },

  buscador: {
    width: width * 0.8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginBottom: 12,
    backgroundColor: "#fff",
    fontSize: 16,
    fontFamily: Platform.OS === "android" ? "monospace" : "Avenir",
  },

  lista: {
    width: "100%",
    paddingVertical: 10,
  },

  producto: {
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    width: width * 0.85,
    marginVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  tituloProducto: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#333",
    marginBottom: 6,
    textAlign: "left",
    fontFamily: Platform.OS === "android" ? "monospace" : "Avenir",
  },

  botonCarrito: {
    width: width * 0.7,
    marginVertical: 8,
    borderRadius: 8,
    alignSelf: "center",
    backgroundColor:  '#7814a2ff',
    paddingVertical: 10,
  },

  textoBotonCarrito: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: Platform.OS === "android" ? "monospace" : "Avenir",
  },

  botonesPequenosFila: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },

  botonMas: {
    backgroundColor: '#3ca214ff',
    width: 38,
    height: 38,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 2,
  },

  botonMenos: {
    backgroundColor: '#a21414ff',
    width: 38,
    height: 38,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 2,
  },

  textoBotonPequeno: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: Platform.OS === "android" ? "monospace" : "Avenir",
  },

  botonFiltro: {
    width: width * 0.7,
    marginVertical: 5,
    borderRadius: 8,
    alignSelf: "center",
    backgroundColor: '#7814a2ff',
    paddingVertical: 10,
  },

  textoBotonFiltro: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: Platform.OS === "android" ? "monospace" : "Avenir",
  },

  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },

  categoria: {
    marginTop: 5,
    fontSize: 13,
  },

  imagen: {
    fontSize: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  textoCantidad: {
    fontSize: 16,
    marginHorizontal: 5,
    fontFamily: Platform.OS === "android" ? "monospace" : "Avenir",
  },

  productoFila: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    width: "90%",
    marginVertical: 8,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  infoIzquierda: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },

  imagenDerecha: {
    width: 100,
    height: 100,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
});
