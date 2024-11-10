import {Router} from "express"
import { subirRubro } from "../handlers/Rubro";
import { validateSchema } from "../middlewares/validator.middleware";
import { rubroSchema } from "../schemas/bd.schema";



const routerRubro= Router();

routerRubro.post('/', validateSchema(rubroSchema),subirRubro)



export default routerRubro