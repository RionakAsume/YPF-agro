import { Request, Response } from "express";
import Routes from "../models/Router.models";

const subirRouter  = async ( req:Request, res: Response ) =>{
    try{
        const router=await Routes.create(req.body)
        res.json({data:router})
    } catch(error){
        console.error('Error al crear el router:', error);
        res.status(500).json({ error: 'Error al crear el router', details: error });
    }
}

const obtenerlistaRouter = async (req:Request, res: Response ) =>{
    try {
        const routers=await Routes.findAll()
        res.json({data:routers})
    } catch{
        console.log(Error);
        
    }
}
const obtenerRouterPorId = async (req: Request, res: Response) =>{
    try{
    const{id}=req.params
    const router = await Routes.findByPk (id)
    if(!router) {
    return res.status(404).json('la ruta no existe')
    }
    res.json({data: router})
    }catch(error) {
    console.log(error)
    }
}

const actualizarRouter = async (req: Request, res: Response) => {
    try{
    const{id}=req.params
    const router = await Routes.findByPk (id)
    if (!router) {
    return res.status(404).json('la ruta no existe')
    }
    await router.update(req.body)
    await router.save()
    res.send({data: router})
    }catch(error) {
    console.log(error)
    }
}

const eliminarRouter = async (req: Request, res: Response)=>{
    try{
    const{id}=req.params
    const router = await Routes.findByPk (id)
    if (!router) {
    return res.status(404).json('la ruta no existe')
    }
    await router.destroy (req.body)
    res.send({data: "ruta eliminado"})
    }catch(error) {
    console.log(error)
    }
}

export{
    subirRouter,
    obtenerlistaRouter,
    obtenerRouterPorId,
    actualizarRouter,
    eliminarRouter
}