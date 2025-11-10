import { createContext, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CarritoContext = createContext();

export const CarritoProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);
    const [cupon, setCupon] = useState(false);

    const agregarProducto = (producto) => {
        setCarrito((prev) =>
            prev.some((i) => i.name === producto.name)
            ? prev.map((i) =>
                i.name === producto.name
                    ? { ...i, quantity: i.quantity + 1 }
                    : i
                )
            : [...prev, {name: producto.name, price: producto.price, quantity: 1 }]
        );
    };

    const quitarProducto = (producto) => {
        setCarrito(carrito.filter(i => i.name != producto.name));
    };

    const quitarUno = (producto) => {
        setCarrito((prev) => {
            return prev
            .map((p) =>
                p.name === producto.name
                ? { ...p, quantity: p.quantity - 1 }
                : p
            )
            .filter((p) => p.quantity > 0); 
        });
    };


    const verificarExistencia = (producto) => {
        const encontrado = carrito.find(i => i.name === producto.name);
        return encontrado ? encontrado.quantity : 0;
    };


    const vaciarCarrito = () => {
        setCarrito([]);
        setCupon(false);
    }

    const aplicarCupon = (posibleCupon) => {
        if (carrito.length > 0 && posibleCupon  === "DESC10") {
            setCupon(true);
        }
    }

    const calcularSubtotal = () => {
        let total = 0;
        carrito.forEach(i => {
            total += i.price * i.quantity;
        });
        return cupon ? total*0.9 : total;
    }

    const value = { 
        carrito, agregarProducto, quitarProducto, verificarExistencia, quitarUno, 
        vaciarCarrito, aplicarCupon, cupon, calcularSubtotal
    };

    return (
        <CarritoContext.Provider value={value}>
            {children}
        </CarritoContext.Provider>
    )
}