import * as http from "http";
import { DataBinary } from "../models/data.binary";
import { User } from "../models/user";
import { DataLink } from "../models/data.link";

export async function checkUser(userEmail: string) {
  const userOne = await User.findOne({
    where: { email: userEmail },
  });
  if (!userOne) {
    throw { message: "No such user exists", statusCode: 404 };
  }
  return userOne;
}

export async function checkUniqueNameDocument(
  userId: number,
  fileName: string
) {
  const findOnePDF = await DataBinary.findOne({
    where: { userId, name: fileName },
  });
  if (findOnePDF) {
    throw { message: "File sweat with this name exists", statusCode: 400 };
  }
}

export async function checkImage(userId: number, imageName: string) {
  const imageUser = await DataLink.findOne({
    where: { userId, name: imageName },
  });
  if (!imageUser) {
    throw { message: "No such image found", statusCode: 404 };
  }
  return imageUser;
}
export async function getImage(urlImage: string): Promise<Buffer> {
  return new Promise((resolve) => {
    http.get(urlImage, (response) => {
      const body: Buffer[] = [];
      response
        .on("data", (chunk: Buffer) => {
          body.push(chunk);
        })
        .on("end", () => {
          resolve(Buffer.concat(body));
        });
    });
  });
}
