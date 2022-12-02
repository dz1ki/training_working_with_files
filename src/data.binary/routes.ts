import * as express from "express";
import { authMiddleware } from "../middlewares/auth.middeleware";
import { findOnePDFUser, generate, listDocumentUser } from "./controller";

export const filePDF: express.IRouter = express.Router();
filePDF.post("/generate", generate);
filePDF.get("/find_all", authMiddleware, listDocumentUser);
filePDF.get("/find_one", authMiddleware, findOnePDFUser);
