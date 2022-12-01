import { generatePDFUser } from "./service";

export async function generate(req, res) {
  try {
    const { fileName, imageName, userEmail } = req.body;
    const result = await generatePDFUser(fileName, imageName, userEmail);
    // res.status(result.statusCode || 200).json(result.message);
    res.status(200).send(result);
  } catch (e) {
    res.status(e.statusCode || 500).json(e.message || "Server error");
  }
}
