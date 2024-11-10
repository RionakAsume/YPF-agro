import { Request, Response } from "express";
import Orders_details from "../models/Order_details.models";

const subirOrders_details  = async ( req:Request, res: Response ) =>{
    try{
        const orders_details=await Orders_details.create(req.body)
        res.json({data:orders_details})
    } catch(error){
        console.error('Error al crear el shipment_status:', error);
        res.status(500).json({ error: 'Error al crear el shipment_status', details: error });
    }
}

const obtenerlistaOrders_details = async (req:Request, res: Response ) =>{
    try {
        const orders_details=await Orders_details.findAll()
        res.json({data:orders_details})
    } catch{
        console.log(Error);
        
    }
}
const obtenerOrders_detailsPorId = async (req: Request, res: Response) =>{
    try{
    const{id}=req.params
    const orders_details = await Orders_details.findByPk (id)
    if(!orders_details) {
    return res.status(404).json('Orders_details no existe')
    }
    res.json({data: orders_details})
    }catch(error) {
    console.log(error)
    }
}

const actualizarOrders_details = async (req: Request, res: Response) => {
    try{
    const{id}=req.params
    const orders_details = await Orders_details.findByPk (id)
    if (!orders_details) {
    return res.status(404).json('Orders_details no existe')
    }
    await orders_details.update(req.body)
    await orders_details.save()
    res.send({data: orders_details})
    }catch(error) {
    console.log(error)
    }
}

const eliminarOrders_details = async (req: Request, res: Response)=>{
    try{
    const{id}=req.params
    const orders_details = await Orders_details.findByPk (id)
    if (!orders_details) {
    return res.status(404).json('Orders_details no existe')
    }
    await orders_details.destroy (req.body)
    res.send({data: "Orders_details eliminado"})
    }catch(error) {
    console.log(error)
    }
}

export{
    subirOrders_details,
    obtenerlistaOrders_details,
    obtenerOrders_detailsPorId,
    actualizarOrders_details,
    eliminarOrders_details
}