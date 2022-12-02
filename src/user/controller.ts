import { User } from "../models/user";
import {
  AuthorizationDTO,
  DeleteUserDto,
  oneUserDTO,
  RegistrationDTO,
  UpdateUserDTO,
} from "../types/user";
import { authorizationUser, registrationUser, updateUser } from "./service";

export async function registration(req: RegistrationDTO, res) {
  try {
    const { userEmail, firstName, lastName, password } = req.body;
    const result = await registrationUser(
      userEmail,
      firstName,
      lastName,
      password
    );
    res.status(result.statusCode || 200).json(result.message);
  } catch (e) {
    res.status(e.statusCode || 500).json(e.message || "Server error");
  }
}

export async function authorization(req: AuthorizationDTO, res) {
  try {
    const { email, password } = req.body;
    const result = await authorizationUser(email, password);
    res
      .status(result.statusCode || 200)
      .json({ message: result.message, token: result.token });
  } catch (e) {
    res.status(e.statusCode || 500).json(e.message || "Server error");
  }
}

export async function update(req: UpdateUserDTO, res) {
  try {
    const { id } = req.user;
    const { newUserEmail, firstName, lastName, password } = req.body;
    const result = await updateUser(
      newUserEmail,
      firstName,
      lastName,
      password,
      id
    );
    res.status(result.stsusCode || 200).json(result.message);
  } catch (e) {
    res.status(e.statusCode || 500).json(e.message || "Server error");
  }
}

export async function deleteUser(req: DeleteUserDto, res) {
  try {
    const { id } = req.user;
    await User.destroy({ where: { id } });
    res.status(200).json({ message: "User delete" });
  } catch (e) {
    res.status(e.statusCode || 500).json(e.message || "Server error");
  }
}

export async function findOneUser(req: oneUserDTO, res) {
  try {
    const { id } = req.user;
    const result = await User.findOne({ where: { id } });
    res.status(200).json(result);
  } catch (e) {
    res.status(e.statusCode || 500).json(e.message || "Server error");
  }
}
