import { Request, Response } from "express";
import Shipment_status from "../models/Shipment_status.models";


const subirShipment_status  = async ( req:Request, res: Response ) =>{
    try{
        const shipment_status=await Shipment_status.create(req.body)
        res.json({data:shipment_status})
    } catch(error){
        console.error('Error al crear el shipment_status:', error);
        res.status(500).json({ error: 'Error al crear el shipment_status', details: error });
    }
}

const obtenerlistaShipment_status = async (req:Request, res: Response ) =>{
    try {
        const shipment_status=await Shipment_status.findAll()
        res.json({data:shipment_status})
    } catch{
        console.log(Error);
        
    }
}
const obtenerShipment_statusPorId = async (req: Request, res: Response) =>{
    try{
    const{id}=req.params
    const shipment_status = await Shipment_status.findByPk (id)
    if(!shipment_status) {
    return res.status(404).json('shipment_status no existe')
    }
    res.json({data: shipment_status})
    }catch(error) {
    console.log(error)
    }
}

const actualizarShipment_status = async (req: Request, res: Response) => {
    try{
    const{id}=req.params
    const shipment_status = await Shipment_status.findByPk (id)
    if (!shipment_status) {
    return res.status(404).json('shipment_status no existe')
    }
    await shipment_status.update(req.body)
    await shipment_status.save()
    res.send({data: shipment_status})
    }catch(error) {
    console.log(error)
    }
}

const eliminarShipment_status = async (req: Request, res: Response)=>{
    try{
    const{id}=req.params
    const shipment_status = await Shipment_status.findByPk (id)
    if (!shipment_status) {
    return res.status(404).json('shipment_status no existe')
    }
    await shipment_status.destroy (req.body)
    res.send({data: "shipment_status eliminado"})
    }catch(error) {
    console.log(error)
    }
}

export{
    subirShipment_status,
    obtenerlistaShipment_status,
    obtenerShipment_statusPorId,
    actualizarShipment_status,
    eliminarShipment_status
}