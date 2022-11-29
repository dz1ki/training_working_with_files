import * as express from "express";
import { authMiddleware } from "../middlewares/auth.middeleware";
import { addImage } from "./controller";

export const userData: express.IRouter = express.Router();
userData.post("/add_image", addImage);
