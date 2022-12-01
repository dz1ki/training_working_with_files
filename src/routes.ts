import * as express from "express";
import { fileImage } from "./files.image/routes";
import { filePDF } from "./files.pdf/routes";
import { users } from "./user/routes";

export const router: express.IRouter = express.Router();
router.use("/users", users);
router.use("/image_users", fileImage);
router.use("/user_pdf", filePDF);
