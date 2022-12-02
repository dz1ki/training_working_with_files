import { DataLink } from "../models/data.link";

export async function uniqueImageUser(userId: number, fileName: string) {
  const uniqueImage = await DataLink.findOne({
    where: { userId, name: fileName },
  });
  if (uniqueImage) {
    throw {
      message: "There is already a picture with the same name",
      statusCode: 400,
    };
  }
}
