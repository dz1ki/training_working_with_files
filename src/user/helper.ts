import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import * as config from "config";

export async function hashPassword(passwordUser: string) {
  return await bcrypt.hash(passwordUser, 5);
}
export async function parsePassword(password: string, passwordDB: string) {
  return await bcrypt.compare(password, passwordDB);
}

export function generateJwt(id: number, email: string) {
  return jwt.sign({ id, email }, config.get("JWT.key"), {
    expiresIn: "24h",
  });
}
