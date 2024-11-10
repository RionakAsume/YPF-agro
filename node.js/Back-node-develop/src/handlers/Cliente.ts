import { Request,Response } from "express";
import Cliente from "../models/Cliente.models";
import User from "../models/User.models";


export const registerCliente = async (req, res) => {


    const { userId, cuit, razonSocial, provincia, localidad } = req.body;

    try {

        const newCliente = new Cliente({
            userId,
            cuit,
            razonSocial,
            provincia,
            localidad,

        });
        const clienteSaved = await newCliente.save();

        res.send(clienteSaved)

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error saving user" });
    }
};


  
export const getClientById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const client = await Cliente.findByPk(id, {
      include: [
        {
          model: User,
          attributes: ['full_name'], // Solo trae el campo full_name del usuario
        },
      ],
    });

    if (!client) {
      return res.status(404).json({ message: "Client not found" });
    }

    res.json({ data: client });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving client" });
  }
};