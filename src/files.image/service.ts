import { saveCloudStorage } from "../libs/cloudinary";
import { ResultSaveImage } from "../types/user.images";
import { FileImage } from "../models/user.images";

export async function saveImageUser(
  files: ResultSaveImage,
  userId,
  userEmail: string,
  fileName: string
) {
  const uniqueImage = await FileImage.findOne({
    where: { userId, name: fileName },
  });
  if (uniqueImage) {
    throw {
      message: "There is already a picture with the same name",
      statusCode: 400,
    };
  }
  const resultSave: Pick<ResultSaveImage, "url"> = await saveCloudStorage(
    files[0].buffer,
    userEmail
  );
  await FileImage.create({ userId, data: resultSave.url, name: fileName });
  return { message: `Image '${fileName}' saved successfully`, statusCode: 201 };
}
