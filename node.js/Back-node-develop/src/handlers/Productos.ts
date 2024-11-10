import { Request, Response } from "express";
import Productos from "../models/Productos.models";

const subirProducto  = async ( req:Request, res: Response ) =>{
    try{
        const producto=await Productos.create(req.body)
        res.json({data:producto})
    } catch(error){
        console.error('Error al crear el rubro:', error);
        res.status(500).json({ error: 'Error al crear el rubro', details: error });
    }
}

const obtenerlistaProducto = async (req:Request, res: Response ) =>{
    try {
        const productos=await Productos.findAll()
        res.json({data:productos})
    } catch{
        console.log(Error);
        
    }
}
const obtenerProductoPorId = async (req: Request, res: Response) =>{
    try{
    const{id}=req.params
    const producto = await Productos.findByPk (id)
    if(!producto) {
    return res.status(404).json('El producto no existe')
    }
    res.json({data: producto})
    }catch(error) {
    console.log(error)
    }
}

const actualizarProducto = async (req: Request, res: Response) => {
    try{
    const{id}=req.params
    const producto = await Productos.findByPk (id)
    if (!producto) {
    return res.status(404).json('El producto no existe')
    }
    await producto.update(req.body)
    await producto.save()
    res.send({data: producto})
    }catch(error) {
    console.log(error)
    }
}

const eliminarProducto = async (req: Request, res: Response)=>{
    try{
    const{id}=req.params
    const producto = await Productos.findByPk (id)
    if (!producto) {
    return res.status(404).json('El producto no existe')
    }
    await producto.destroy (req.body)
    res.send({data: "producto eliminado"})
    }catch(error) {
    console.log(error)
    }
}

export{
    subirProducto,
    obtenerlistaProducto,
    obtenerProductoPorId,
    actualizarProducto,
    eliminarProducto
}