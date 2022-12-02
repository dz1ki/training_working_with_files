import { AddImageDTO } from "../types/data.link";

export function fileExtensionMiddeleware(
  req: Pick<AddImageDTO, "files">,
  res,
  next
) {
  try {
    const { mimetype } = req.files[0];
    const result =
      mimetype.includes("image/png") || mimetype.includes("image/jpeg");
    if (!result) {
      return res.status(400).json({ message: "Invalid file format" });
    }
    next();
  } catch (e) {
    res.status(400).json({ message: "Invalid file format" });
  }
}
