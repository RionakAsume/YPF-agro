import {Router} from "express"
import { subirShipment_status, obtenerlistaShipment_status, obtenerShipment_statusPorId, actualizarShipment_status, eliminarShipment_status } from "../handlers/Shipment_status";
import { validateSchema } from "../middlewares/validator.middleware";
import { shipment_statusSchema } from "../schemas/bd.schema";


const routerShipment_status= Router();

routerShipment_status.post('/', validateSchema(shipment_statusSchema),subirShipment_status),
routerShipment_status.get('/',obtenerlistaShipment_status),
routerShipment_status.get('/:id', obtenerShipment_statusPorId),
routerShipment_status.put('/:id', validateSchema(shipment_statusSchema),actualizarShipment_status)
routerShipment_status.delete('/:id', eliminarShipment_status)

export default routerShipment_status