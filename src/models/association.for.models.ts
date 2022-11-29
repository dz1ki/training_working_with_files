import { DataUser } from "./data.user";
import { User } from "./user";

User.hasMany(DataUser, { foreignKey: "id" });
DataUser.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
  as: "users",
});
