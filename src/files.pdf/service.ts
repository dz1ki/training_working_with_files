import { FileImage } from "../models/user.images";
import { User } from "../models/user";
import { getImage } from "./helper";
import { generatePDF } from "../utils";
import { FilePDF } from "../models/user.pdf";

export async function generatePDFUser(fileName, imageName, userEmail) {
  const userOne = await User.findOne({
    where: { email: userEmail },
    raw: true,
    nest: true,
  });
  const { firstName, lastName, id }: any = userOne;
  if (!userOne) {
    throw { message: "No such user exists", statusCode: 404 };
  }
  const imageUser = await FileImage.findOne({
    where: { userId: userOne.id, name: imageName },
    raw: true,
    nest: true,
  });
  if (!imageUser) {
    throw { message: "No such image found", statusCode: 404 };
  }
  const imageBuffer = await getImage(imageUser.data);
  const bufferPDFFile: any = await generatePDF(
    firstName,
    lastName,
    imageBuffer
  );
  await FilePDF.create({ userId: id, name: fileName, data: bufferPDFFile });
  const result = await FilePDF.findOne({
    where: { name: fileName, userId: id },
  });
  console.log(result.data);

  return result.data;
}
