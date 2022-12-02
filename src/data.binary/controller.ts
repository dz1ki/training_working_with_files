import {
  FindOneDocDTO,
  GenerateDataDto,
  ListDocDTO,
} from "../types/data.binary";
import { DataBinary } from "../models/data.binary";
import { generatePDFUser } from "./service";

export async function generate(req: GenerateDataDto, res) {
  try {
    const { fileName, imageName, userEmail } = req.body;
    const result = await generatePDFUser(fileName, imageName, userEmail);
    res.status(result.statusCode || 200).send(result.message);
  } catch (e) {
    res.status(e.statusCode || 500).json(e.message || "Server error");
  }
}

export async function listDocumentUser(req: ListDocDTO, res) {
  try {
    const { id } = req.user;
    const result = await DataBinary.findAll({
      where: { userId: id },
      attributes: ["name"],
    });
    res.status(200).json(result);
  } catch (e) {
    res.status(e.statusCode || 500).json(e.message || "Server error");
  }
}

export async function findOnePDFUser(req: FindOneDocDTO, res) {
  try {
    const { id } = req.user;
    const { fileName } = req.query;
    const result = await DataBinary.findOne({
      where: { userId: id, name: fileName },
    });
    res.status(200).send(result.data);
  } catch (e) {
    res.status(e.statusCode || 500).json(e.message || "Server error");
  }
}
