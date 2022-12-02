import { User } from "../models/user";
import {
  checUniquekUser,
  generateJwt,
  hashPassword,
  checkPassword,
  checkUser,
} from "./helper";

export async function registrationUser(
  userEmail: string,
  firstName: string,
  lastName: string,
  passwordUser: string
) {
  await checUniquekUser(userEmail);
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
  const findUser = await checkUser(emailUser);
  await checkPassword(password, findUser.password);
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
