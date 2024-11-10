import express from "express"
import routerUser from "./router/user";
import routerRole from "./router/role";
import routerRubro from "./router/rubro";
import routerProducto from "./router/productos";
import routerCliente from "./router/cliente";
import routerRouter from "./router/router";
import routerOrder from "./router/Orders";
import routerStatus from "./router/status";
import routerOrders_details from "./router/Order_details";
import routerShipment_status from "./router/shipment_status";
import db from "./config/db";
import  authRoutes  from "./router/auth.router";
import cookieParser from 'cookie-parser'
import cors from 'cors'


async function conectDB(){
    try {
        await db.authenticate()
        db.sync()
        console.log('La base de datos se conecto correctamente')
    } catch (error) {
        console.log(error)
        console.log('eeror de conexion en la bd')
    }
}

// async function connectDB() {
//     try {
//       await db.authenticate(); // Verificar conexión con la base de datos
//       console.log("Conexión a la base de datos exitosa");
  
//       await db.sync({ force: true }); // Sincronizar tablas (¡Cuidado con force en producción!)
//       console.log("Tablas sincronizadas");
//     } catch (error) {
//       console.error("Error al conectar o sincronizar la base de datos:", error);
//     }
//   }
 // connectDB()
conectDB();

const server=express();

server.use(express.json());
server.use(cookieParser());
server.use(cors({
    origin: 'http://localhost:5173',
    credentials:true,
}));

server.use('/api/',authRoutes)
server.use('/api/user', routerUser)
server.use('/api/cliente', routerCliente)
server.use('/api/role', routerRole)
server.use('/api/rubro', routerRubro)
server.use('/api/productos', routerProducto)
server.use('/api/router', routerRouter)
server.use('/api/shipment_status', routerShipment_status)
server.use('/api/order', routerOrder)
server.use('/api/status',routerStatus)
server.use('/api/Orders_details', routerOrders_details)


export default server