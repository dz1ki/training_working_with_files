import { AddImageDTO, FindAllImageDTO } from "../types/data.link";
import { DataLink } from "../models/data.link";
import { saveImageUser } from "./service";

export async function addImage(req: AddImageDTO, res) {
  try {
    const { fileName } = req.body;
    const { id, email } = req.user;
    const { buffer } = req.files[0];
    const result = await saveImageUser(buffer, id, email, fileName);
    res.status(result.statusCode || 200).json(result.message);
  } catch (e) {
    res.status(e.statusCode || 500).json(e.message || "Server error");
  }
}
export async function findAllImage(req: FindAllImageDTO, res) {
  try {
    const { id } = req.user;
    const result = await DataLink.findAll({ where: { userId: id } });
    res.status(200).json(result);
  } catch (e) {
    res.status(e.statusCode || 500).json(e.message || "Server error");
  }
}
