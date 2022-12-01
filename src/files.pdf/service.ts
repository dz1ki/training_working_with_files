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
  if (!userOne) {
    throw { message: "No such user exists", statusCode: 404 };
  }
  const { firstName, lastName, id }: any = userOne;
  const findOnePDF = await FilePDF.findOne({
    where: { userId: id, name: fileName },
  });
  if (findOnePDF) {
    throw { message: "File sweat with this name exists", statusCode: 400 };
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
  return {
    message: "PDF document generated.",
    statusCode: 201,
  };
}
