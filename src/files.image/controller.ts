import { FileImage } from "../models/user.images";
import { saveImageUser } from "./service";

export async function addImage(req, res) {
  try {
    const { fileName } = req.body;
    const { id, email } = req.user;
    const { files } = req;
    const result = await saveImageUser(files, id, email, fileName);
    res.status(result.statusCode || 200).json(result.message);
  } catch (e) {
    res.status(e.statusCode || 500).json(e.message || "Server error");
  }
}
export async function findAllImage(req, res) {
  try {
    const { id } = req.user;
    const result = await FileImage.findAll({ where: { userId: id } });
    res.status(200).json(result);
  } catch (e) {
    res.status(e.statusCode || 500).json(e.message || "Server error");
  }
}
