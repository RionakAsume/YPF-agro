import {Router} from "express"
import { postUser,getUsersByRoleId,getUserById } from "../handlers/user";
const routerUser= Router();


routerUser.post('/',postUser)

routerUser.get("/role/:roleId",getUsersByRoleId)

routerUser.get("/:id",getUserById)


// Falta mas matodos!!

export default routerUser