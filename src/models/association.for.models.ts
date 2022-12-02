import { DataLink } from "./data.link";
import { User } from "./user";
import { DataBinary } from "./data.binary";

User.hasMany(DataLink, {
  foreignKey: { name: "user_id" },
  sourceKey: "id",
  as: "dataLink",
});
DataLink.belongsTo(User, {
  foreignKey: "id",
  onDelete: "CASCADE",
  as: "users",
});

User.hasMany(DataBinary, {
  foreignKey: { name: "user_id" },
  sourceKey: "id",
  as: "dataBinary",
});
DataBinary.belongsTo(User, {
  foreignKey: "id",
  onDelete: "CASCADE",
  as: "users",
});
