import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { sequelize } from "./index";
import { User } from "./user";

export class FileImage extends Model<
  InferAttributes<FileImage>,
  InferCreationAttributes<FileImage>
> {
  declare id: CreationOptional<number>;
  declare userId?: User;
  declare name: string;
  declare data: string;
  declare created_at: CreationOptional<Date>;
  declare updated_at: CreationOptional<Date>;
}
FileImage.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: new DataTypes.INTEGER(),
      allowNull: false,
      field: "user_id",
    },
    data: {
      type: new DataTypes.STRING(128),
    },
    name: {
      type: new DataTypes.STRING(128),
    },
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  },
  {
    tableName: "files_image",
    sequelize,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);
