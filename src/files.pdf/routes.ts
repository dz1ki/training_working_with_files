import * as express from "express";
import { generate } from "./controller";

export const userPDF: express.IRouter = express.Router();
userPDF.post("/generate", generate);
