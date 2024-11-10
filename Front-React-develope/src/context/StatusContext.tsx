import { createContext, useContext, useState,useEffect } from "react";
import { getStatusRequest } from "../api/status";

const StatusContext = createContext();

export const useStatus = () => {
    const context = useContext(StatusContext)

    if (!context) {
        throw new Error("useStatus deberia estar dentro de un StatusProvider")
    }

    return context
}

export function StatusProvider({ children }) {

    const [status, setStatus] = useState([])

    const getStatus = async () => {
        try {

            const res = await getStatusRequest();
            console.log('Respuesta de la API status:', res.data); 
            setStatus(res.data.data || [])
        } catch (error) {
            console.log(error)
            setStatus([]);
        }

    }

    useEffect(() => {
        getStatus();
    }, []);

    return (
        <StatusContext.Provider value={{
            status,
            getStatus,
          
        }}>
            {children}
        </StatusContext.Provider>
    )
}