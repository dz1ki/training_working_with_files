import {
  checkImage,
  checkUniqueNameDocument,
  checkUser,
  getImage,
} from "./helper";
import { generatePDF } from "../utils";
import { DataBinary } from "../models/data.binary";
import { User } from "../models/user";

export async function generatePDFUser(
  fileName: string,
  imageName: string,
  userEmail: string
) {
  const user = await checkUser(userEmail);
  const { firstName, lastName, id }: User = user;
  await checkUniqueNameDocument(id, fileName);
  const oneImageUser = await checkImage(id, imageName);
  const imageBuffer = await getImage(oneImageUser.data);
  const bufferPDFFile = await generatePDF(firstName, lastName, imageBuffer);
  await DataBinary.create({ userId: id, name: fileName, data: bufferPDFFile });
  return {
    message: "PDF document generated.",
    statusCode: 201,
  };
}
