import { Request, Response } from "express";
import Status from "../models/Status.models";
import Shipment_status from "../models/Shipment_status.models";

const subirStatus  = async ( req:Request, res: Response ) =>{
    try{
        const status=await Status.create(req.body)
        res.json({data:status})
    } catch(error){
        console.error('Error al crear el shipment_status:', error);
        res.status(500).json({ error: 'Error al crear el shipment_status', details: error });
    }
}

// const obtenerlistaStatus = async (req:Request, res: Response ) =>{
//     try {
//         const status=await Status.findAll()
//         res.json({data:status})
//     } catch{
//         console.log(Error);
        
//     }
// }


const obtenerlistaStatus = async (req: Request, res: Response) => {
    try {
      const status = await Status.findAll({
        include: [
          {
            model: Shipment_status,
            attributes: ['description'], 
          },
        ],
      });
      res.json({ data: status });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al obtener el listado de status" });
    }
  };

  
const obtenerStatusPorId = async (req: Request, res: Response) =>{
    try{
    const{id}=req.params
    const status = await Status.findByPk (id)
    if(!status) {
    return res.status(404).json('status no existe')
    }
    res.json({data: status})
    }catch(error) {
    console.log(error)
    }
}


const actualizarStatus = async (req, res) => {
  const { id } = req.params;
  const { shipment_status_id } = req.body;

  try {
    // Encuentra el registro primero
    const status = await Status.findOne({ where: { id } });
    if (!status) {
      return res.status(404).json({ message: "Status not found" });
    }

    // Actualiza el registro
    const [updatedRows] = await Status.update(
      { shipment_status_id },
      { where: { id } }
    );

    if (updatedRows === 0) {
      return res.status(500).json({ message: "No se pudo actualizar el estado" });
    }

    const updatedStatus = await Status.findOne({ where: { id } });
    res.status(200).json(updatedStatus);
  } catch (error) {
    console.error("Error updating status:", error);
    res.status(500).json({ message: "Error updating status" });
  }
};

// const actualizarStatus = async (req: Request, res: Response) => {
//     try{
//     const{id}=req.params
//     const status = await Status.findByPk (id)
//     if (!status) {
//     return res.status(404).json('status no existe')
//     }
//     await status.update(req.body)
//     await status.save()
//     res.send({data: status})
//     }catch(error) {
//     console.log(error)
//     }
// }

const eliminarStatus = async (req: Request, res: Response)=>{
    try{
    const{id}=req.params
    const status = await Status.findByPk (id)
    if (!status) {
    return res.status(404).json('status no existe')
    }
    await status.destroy (req.body)
    res.send({data: "status eliminado"})
    }catch(error) {
    console.log(error)
    }
}

export{
    subirStatus,
    obtenerlistaStatus,
    obtenerStatusPorId,
    actualizarStatus,
    eliminarStatus
}