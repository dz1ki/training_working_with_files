import * as express from "express";
import { userImage } from "./files.image/routes";
import { userPDF } from "./files.pdf/routes";
import { users } from "./user/routes";

export const router: express.IRouter = express.Router();
router.use("/users", users);
router.use("/image_users", userImage);
router.use("/user_pdf", userPDF);
