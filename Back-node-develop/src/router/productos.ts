import {Router} from "express"
import { subirProducto, obtenerlistaProducto, obtenerProductoPorId, actualizarProducto, eliminarProducto } from "../handlers/Productos"
import { validateSchema } from "../middlewares/validator.middleware";
import { productosSchema } from "../schemas/bd.schema";

const routerProducto= Router();

routerProducto.post('/', validateSchema(productosSchema), subirProducto),
routerProducto.get('/', obtenerlistaProducto),
routerProducto.get('/:id', obtenerProductoPorId),
routerProducto.put('/:id', validateSchema(productosSchema), actualizarProducto)
routerProducto.delete('/:id', eliminarProducto)

export default routerProducto