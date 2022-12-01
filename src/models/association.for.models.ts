import { FileImage } from "./user.images";
import { User } from "./user";
import { FilePDF } from "./user.pdf";

User.hasMany(FileImage, {
  foreignKey: { name: "user_id" },
  sourceKey: "id",
  as: "image",
});
FileImage.belongsTo(User, {
  foreignKey: "id",
  onDelete: "CASCADE",
  as: "users",
});

User.hasMany(FilePDF, {
  foreignKey: { name: "user_id" },
  sourceKey: "id",
  as: "pdf",
});
FilePDF.belongsTo(User, {
  foreignKey: "id",
  onDelete: "CASCADE",
  as: "users",
});
