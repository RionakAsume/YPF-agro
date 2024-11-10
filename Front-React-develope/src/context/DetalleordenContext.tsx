import { createContext, useState, useContext, useEffect } from "react";
import { getOrdenIdRequest } from "../api/orden";
import { putStatusRequest } from "../api/status";

export const DetalleordenContext = createContext();

export const useDetalle = () => {
  const context = useContext(DetalleordenContext);
  if (!context) {
    throw new Error("useDetalle deberia estar dentro de un DetalleProvider");
  }
  return context;
};

export const DetalleProvider = ({ children }) => {

    const [ordenDetalle, setOrdenDetalle] = useState([])

    const getOrdenDetalleId = async (Id) => {
        try {

            const res = await getOrdenIdRequest(Id);
            console.log('Respuesta de la Ordendetallado:', res.data); 
            setOrdenDetalle(res.data.data || [])
        } catch (error) {
            console.log(error)
            setOrdenDetalle([]);
        }

    }
    const updateStatus = async (id, estado) => {
      try {
        const res = await putStatusRequest(id, estado);
        console.log("Estado de shipment_status actualizado", res.data);
    
       
  
      } catch (error) {
        console.log(error);
      }
    };

    
    return (
        <DetalleordenContext.Provider
          value={{
            getOrdenDetalleId,
            ordenDetalle,
            updateStatus,

          }}
        >
          {children}
        </DetalleordenContext.Provider>
      );
    };
    

