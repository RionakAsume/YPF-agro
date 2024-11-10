import { z } from "zod";

export const clienteSchema = z.object({
  userId: z.number({ required_error: "El numero de id es requerido", }).min(1, { message: "El id debe ser mayor a 0",}),
  cuit: z.number({ required_error: "El CUIT es requerido", }),
  razonSocial: z.string({ required_error: "La razon social es requerida", }),
  provincia: z.string({ required_error: "La provincia es requerida", }),
  localidad: z.string({ required_error: "La localidad es requerida", }),
});

export const orders_detailsSchema = z.object({
  order_id: z.number({ required_error: "El numero de id es requerido", }).min(1, { message: "El id debe ser mayor a 0" }),
  product_id: z.number({ required_error: "El id del producto es requerido", }).min(1, { message: "El id debe ser mayor a 0", }),
  quantity: z.number({ required_error: "La cantidad es requerida",}).min(1, { message: "La cantidad debe ser mayor a 0", }),
  finalprice: z.number({ required_error: "El precio final es requerido",}).min(1, { message: "El precio final debe ser mayor a 0", }),
});

export const ordersSchema = z.object({
  cliente_id: z.number({ required_error: "El numero de id del cliente es requerido", }).min(1, { message: "El id debe ser mayor a 0",}),
  vendedor_id: z.number({ required_error: "El id del vendedor es requerido",}).min(1, { message: "El id debe ser mayor a 0",}),
  transpotista_id: z.number({required_error: "El id del transportista es requerido",}).min(1, { message: "El id debe ser mayor a 0",}),
  router_id: z.number({ required_error: "El id del router es requerido", }).min(1, { message: "El id debe ser mayor a 0",}),
  comments: z.string({ required_error: "El comentario es requerido",}),
});

export const productosSchema = z.object({
  name: z.string({ required_error: "El nombre del producto es requerido" }),
  description: z.string({ required_error: "La descripción del producto es requerida",}),
  rubrosId: z.number({ required_error: "El id del rubro es requerido" }).min(1, { message: "El id debe ser mayor a 0",}),
  price: z.number({ required_error: "El precio es requerido" }).min(1, { message: "El precio debe ser mayor a 0", }),
  stock_quantity: z.number({required_error: "La cantidad de stock es requerida",}).min(1, { message: "El stock debe ser mayor a 0", }),
  status: z.boolean({ required_error: "El estado es requerido" }).optional(),
});

export const roleSchema = z.object({
  description: z.string({required_error: "La descripción del rol es requerida",}),
});

export const routerSchema = z.object({
  origin: z.string({required_error: "El origen es requerido",}),
  destination: z.string({required_error: "El destino es requerido",}),
  distance: z.number({required_error: "La distancia es requerida",}).min(1, { message: "La distancia debe ser mayor a 0",}),

});

export const rubroSchema = z.object({
  descripcion: z.string({required_error: "La descripción del rubro es requerido",}),
});

export const shipment_statusSchema = z.object({
  description: z.string({required_error: "La descripción del envio es requerido",}),
});

export const statusSchema = z.object({
  orders_id: z.number({required_error: "El numero de id de la orden es requerida",}).min(1, { message: "El id debe ser mayor a 0", }),
  shipment_status_id: z.number({required_error: "El id del estado del envío es requerido",}).min(1, { message: "El id debe ser mayor a 0", }),
  observacion: z.string({ required_error: "La observaciones son requeridas", }),
});
