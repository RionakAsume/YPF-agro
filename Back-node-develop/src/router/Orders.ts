import { Router } from "express";
import {
  subirOrder,
  obtenerlistaOrder,
  obtenerOrderConProductos,
  actualizarOrder,
  eliminarOrder,
} from "../handlers/Orders";
import { validateSchema } from "../middlewares/validator.middleware";
import { ordersSchema } from "../schemas/bd.schema";
const routerOrder = Router();

routerOrder.post("/", validateSchema(ordersSchema), subirOrder),
  routerOrder.get("/", obtenerlistaOrder),
  routerOrder.get("/:id", obtenerOrderConProductos),
  routerOrder.put("/:id", validateSchema(ordersSchema), actualizarOrder);
routerOrder.delete("/:id", eliminarOrder);

export default routerOrder;
