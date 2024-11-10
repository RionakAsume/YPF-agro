import { Request, Response } from "express";
import Orders from "../models/Orders.models";
import Cliente from "../models/Cliente.models";
import User from "../models/User.models"; 
import Router from "../models/Router.models"; 
import Orders_details from "../models/Order_details.models";
import Productos from "../models/Productos.models";

const subirOrder  = async ( req:Request, res: Response ) =>{
    try{
        const orders=await Orders.create(req.body)
        res.json({data:orders})
    } catch(error){
        console.error('Error al crear el order:', error);
        res.status(500).json({ error: 'Error al crear el order', details: error });
    }
}



const obtenerlistaOrder = async (req: Request, res: Response) => {
  try {
    const orders = await Orders.findAll({
      include: [
        {
          model: Cliente,
          include: [User], // Incluir el usuario del cliente
        },
        { model: User, as: 'vendedor' }, // Vendedor con alias
        { model: User, as: 'transportista' }, // Transportista con alias
        { model: Router }, 
      ],
    });

    res.json({ data: orders });
  } catch (error) {
    console.error('Error al obtener las órdenes:', error);
    res.status(500).json({ error: 'Error al obtener las órdenes' });
  }
};


// const obtenerOrderPorId = async (req: Request, res: Response) =>{
//     try{
//     const{id}=req.params
//     const orders = await Orders.findByPk (id)
//     if(!orders) {
//     return res.status(404).json('La orden no existe')
//     }
//     res.json({data: orders})
//     }catch(error) {
//     console.log(error)
//     }
// }
const obtenerOrderConProductos = async (req: Request, res: Response) => {
  try {
      const { id } = req.params;
      const order = await Orders.findByPk(id, {
          include: [
              {
                  model: Orders_details,
                  include: [
                      {
                          model: Productos,
                      },
                  ],
              },
          ],
      });

      if (!order) {
          return res.status(404).json({ message: 'Orden no encontrada' });
      }

      res.json({ data: order });
  } catch (error) {
      console.error('Error al obtener la orden con productos:', error);
      res.status(500).json({ error: 'Error al obtener la orden con productos', details: error });
  }
};



const actualizarOrder = async (req: Request, res: Response) => {
    try{
    const{id}=req.params
    const orders = await Orders.findByPk (id)
    if (!orders) {
    return res.status(404).json('La orden no existe')
    }
    await orders.update(req.body)
    await orders.save()
    res.send({data: orders})
    }catch(error) {
    console.log(error)
    }
}

const eliminarOrder = async (req: Request, res: Response)=>{
    try{
    const{id}=req.params
    const orders = await Orders.findByPk (id)
    if (!orders) {
    return res.status(404).json('La orden no existe')
    }
    await orders.destroy (req.body)
    res.send({data: "orden eliminado"})
    }catch(error) {
    console.log(error)
    }
}

export{
    subirOrder,
    obtenerlistaOrder,
    obtenerOrderConProductos,
    actualizarOrder,
    eliminarOrder
}