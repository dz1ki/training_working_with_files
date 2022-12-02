import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import * as config from "config";
import { User } from "../models/user";

export async function hashPassword(passwordUser: string) {
  return await bcrypt.hash(passwordUser, 5);
}
export async function checkPassword(password: string, passwordDB: string) {
  const resultParse = await bcrypt.compare(password, passwordDB);
  if (!resultParse) {
    throw { message: "Wrong password", statusCode: 400 };
  }
}
export function generateJwt(id: number, email: string) {
  return jwt.sign({ id, email }, config.get("JWT.key"), {
    expiresIn: "24h",
  });
}

export async function checUniquekUser(userEmail: string) {
  const findUser = await User.findOne({ where: { email: userEmail } });
  if (findUser) {
    throw {
      message: "There is already a user with this mail",
      statusCode: 400,
    };
  }
}

export async function checkUser(emailUser: string) {
  const findUser = await User.findOne({ where: { email: emailUser } });
  if (!findUser) {
    throw { message: "No such user exists", statusCode: 400 };
  }
  return findUser;
}
