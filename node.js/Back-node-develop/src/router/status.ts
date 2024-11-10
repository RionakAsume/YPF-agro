import {Router} from "express"
import { subirStatus,obtenerlistaStatus,obtenerStatusPorId,actualizarStatus,eliminarStatus } from "../handlers/Status"
import { validateSchema } from "../middlewares/validator.middleware";
import { statusSchema } from "../schemas/bd.schema";
 
const routerStatus= Router();

routerStatus.post('/', validateSchema(statusSchema),subirStatus),
routerStatus.get('/', obtenerlistaStatus),
routerStatus.get('/:id',  obtenerStatusPorId),
routerStatus.put('/:id', actualizarStatus)
routerStatus.delete('/:id', eliminarStatus)

export default routerStatus