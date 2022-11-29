import { User } from "../models/user";
import { generateJwt, hashPassword, parsePassword } from "./helper";

export async function registrationUser(
  userEmail: string,
  firstName: string,
  lastName: string,
  passwordUser: string
) {
  const findUser = await User.findOne({ where: { email: userEmail } });
  if (findUser) {
    throw {
      message: "There is already a user with this mail",
      statusCode: 400,
    };
  }
  const resultHash = await hashPassword(passwordUser);
  await User.create({
    email: userEmail,
    firstName,
    lastName,
    password: resultHash,
  });
  return { message: "User successfully registered", statusCode: 201 };
}

export async function authorizationUser(emailUser: string, password: string) {
  const findUser = await User.findOne({ where: { email: emailUser } });
  if (!findUser) {
    throw { message: "No such user exists", statusCode: 400 };
  }
  const resultParse = await parsePassword(password, findUser.password);
  if (!resultParse) {
    throw { message: "Wrong password", statusCode: 400 };
  }
  const token = generateJwt(findUser.id, findUser.email);
  return { message: "User is authorized", statusCode: 200, token };
}

export async function updateUser(
  newUserEmail: string,
  firstName: string,
  lastName: string,
  passwordUser: string,
  id: number
) {
  if (passwordUser) {
    var resultHash = await hashPassword(passwordUser);
  }
  await User.update(
    {
      email: newUserEmail,
      firstName,
      lastName,
      password: resultHash,
    },
    { where: { id } }
  );
  return { message: "User updated", stsusCode: 202 };
}
