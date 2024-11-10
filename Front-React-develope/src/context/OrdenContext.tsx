import { createContext, useContext, useState,useEffect } from "react";
import { getOrdenRequest } from "../api/orden";

const OrdenContext = createContext();

export const useOrden = () => {
    const context = useContext(OrdenContext)

    if (!context) {
        throw new Error("useOrden deberia estar dentro de un OrdenProvider")
    }

    return context
}

export function OrdenProvider({ children }) {

    const [orden, setOrden] = useState([])

    const getOrden = async () => {
        try {

            const res = await getOrdenRequest();
            console.log('Respuesta de la API:', res.data); 
            setOrden(res.data.data || [])
        } catch (error) {
            console.log(error)
            setOrden([]);
        }

    }

    useEffect(() => {
        getOrden();
    }, []);

    return (
        <OrdenContext.Provider value={{
            orden,
            getOrden,
        }}>
            {children}
        </OrdenContext.Provider>
    )
}