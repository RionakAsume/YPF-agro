import { Router } from "express";
import {
  subirOrders_details,
  obtenerlistaOrders_details,
  obtenerOrders_detailsPorId,
  actualizarOrders_details,
  eliminarOrders_details,
} from "../handlers/Orders_details";
import { validateSchema } from "../middlewares/validator.middleware";
import { orders_detailsSchema } from "../schemas/bd.schema";

const routerOrders_details = Router();

routerOrders_details.post(
  "/",
  validateSchema(orders_detailsSchema),
  subirOrders_details
),
  routerOrders_details.get(
    "/",

    obtenerlistaOrders_details
  ),
  routerOrders_details.get(
    "/:id",

    obtenerOrders_detailsPorId
  ),
  routerOrders_details.put(
    "/:id",
    validateSchema(orders_detailsSchema),
    actualizarOrders_details
  );
routerOrders_details.delete(
  "/:id",

  eliminarOrders_details
);

export default routerOrders_details;
