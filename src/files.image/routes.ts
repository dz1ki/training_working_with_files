import * as express from "express";
import { authMiddleware } from "../middlewares/auth.middeleware";
import { addImage, findAllImage } from "./controller";

export const userImage: express.IRouter = express.Router();
userImage.post("/add_image", authMiddleware, addImage);
userImage.get("/find_all", authMiddleware, findAllImage);
