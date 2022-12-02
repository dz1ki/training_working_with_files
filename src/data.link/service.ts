import { saveCloudStorage } from "../libs/cloudinary";
import { ResultSaveImage } from "../types/data.link";
import { DataLink } from "../models/data.link";
import { uniqueImageUser } from "./helper";

export async function saveImageUser(
  buffer: Buffer,
  userId: number,
  userEmail: string,
  fileName: string
) {
  await uniqueImageUser(userId, fileName);
  const resultSave: Pick<ResultSaveImage, "url"> = await saveCloudStorage(
    buffer,
    userEmail
  );
  await DataLink.create({ userId, data: resultSave.url, name: fileName });
  return { message: `Image '${fileName}' saved successfully`, statusCode: 201 };
}
