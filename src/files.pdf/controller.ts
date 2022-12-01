import { FilePDF } from "../models/user.pdf";
import { generatePDFUser } from "./service";

export async function generate(req, res) {
  try {
    const { fileName, imageName, userEmail } = req.body;
    const result = await generatePDFUser(fileName, imageName, userEmail);
    res.status(result.statusCode || 200).send(result.message);
  } catch (e) {
    res.status(e.statusCode || 500).json(e.message || "Server error");
  }
}

export async function listDocumentUser(req, res) {
  try {
    const { id } = req.user;
    console.log("🚀 ~ listDocumentUser ~ id", id);
    const result = await FilePDF.findAll({
      where: { userId: id },
      attributes: ["name"],
    });
    res.status(200).json(result);
  } catch (e) {
    res.status(e.statusCode || 500).json(e.message || "Server error");
  }
}

export async function findOnePDFUser(req, res) {
  try {
    const { id } = req.user;
    const { fileName } = req.query;
    const result = await FilePDF.findOne({
      where: { userId: id, name: fileName },
    });
    res.status(200).send(result.data);
  } catch (e) {
    res.status(e.statusCode || 500).json(e.message || "Server error");
  }
}
