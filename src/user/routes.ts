import * as express from "express";
import { authMiddleware } from "../middlewares/auth.middeleware";
import {
  authorization,
  deleteUser,
  findOneUser,
  registration,
  update,
} from "./controller";

export const users: express.IRouter = express.Router();
users.post("/registration", registration);
users.post("/authorization", authorization);
users.patch("/update", authMiddleware, update);
users.delete("/delete", authMiddleware, deleteUser);
users.get("/oneUser", authMiddleware, findOneUser);
