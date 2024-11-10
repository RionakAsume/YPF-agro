
import { Router } from "express";
import { registerCliente, getClientById } from "../handlers/Cliente";
import { validateSchema } from "../middlewares/validator.middleware";
import { clienteSchema } from "../schemas/bd.schema";


const routerCliente = Router();


routerCliente.post('/',validateSchema(clienteSchema), registerCliente)
routerCliente.get("/:id",getClientById)


export default routerCliente;
