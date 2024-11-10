import { Request, Response } from "express";
import Rubro from "../models/Rubros.models";

const subirRubro  = async ( req:Request, res: Response ) =>{
    try{
        const rubro=await Rubro.create(req.body)
        res.json({data:rubro})
    } catch(error){
        console.error('Error al crear el rubro:', error);
        res.status(500).json({ error: 'Error al crear el rubro', details: error });
    }
}
export{
    subirRubro
}