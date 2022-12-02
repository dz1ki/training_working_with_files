import * as express from "express";
import { fileImage } from "./data.link/routes";
import { filePDF } from "./data.binary/routes";
import { users } from "./user/routes";

export const router: express.IRouter = express.Router();
router.use("/users", users);
router.use("/image_users", fileImage);
router.use("/user_pdf", filePDF);
