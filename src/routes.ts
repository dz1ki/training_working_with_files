import * as express from "express";
import { userData } from "./user.data/routes";
import { users } from "./user/routes";

export const router: express.IRouter = express.Router();
router.use("/users", users);
router.use("/data", userData);
