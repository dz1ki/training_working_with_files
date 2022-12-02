import * as express from "express";
import { fileExtensionMiddeleware } from "../middlewares/file.extension.middeleware";
import { authMiddleware } from "../middlewares/auth.middeleware";
import { addImage, findAllImage } from "./controller";

export const fileImage: express.IRouter = express.Router();
fileImage.post(
  "/add_image",
  authMiddleware,
  fileExtensionMiddeleware,
  addImage
);
fileImage.get("/find_all", authMiddleware, findAllImage);
