import {Router} from "express"
import { subirRouter,obtenerlistaRouter, obtenerRouterPorId, actualizarRouter, eliminarRouter } from "../handlers/Router"
import { validateSchema } from "../middlewares/validator.middleware";
import { routerSchema } from "../schemas/bd.schema";

const routerRouter= Router();

routerRouter.post('/', validateSchema(routerSchema),subirRouter),
routerRouter.get('/',obtenerlistaRouter),
routerRouter.get('/:id',obtenerRouterPorId),
routerRouter.put('/:id', validateSchema(routerSchema),actualizarRouter)
routerRouter.delete('/:id',eliminarRouter)

export default routerRouter