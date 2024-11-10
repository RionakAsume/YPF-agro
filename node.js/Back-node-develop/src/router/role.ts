import {Router} from "express"
import {postRole} from "../handlers/Role"
import { validateSchema } from "../middlewares/validator.middleware";
import { roleSchema } from "../schemas/bd.schema";

const routerRole= Router();


routerRole.post('/', validateSchema(roleSchema),postRole)



export default routerRole