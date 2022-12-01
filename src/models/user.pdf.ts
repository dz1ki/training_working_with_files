import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { sequelize } from "./index";
import { User } from "./user";

export class FilePDF extends Model<
  InferAttributes<FilePDF>,
  InferCreationAttributes<FilePDF>
> {
  declare id: CreationOptional<number>;
  declare userId?: User;
  declare name: string;
  declare data: BinaryData;
  declare created_at: CreationOptional<Date>;
  declare updated_at: CreationOptional<Date>;
}
FilePDF.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: new DataTypes.INTEGER(),
      allowNull: true,
      field: "user_id",
    },
    name: {
      type: new DataTypes.STRING(128),
    },
    data: {
      type: new DataTypes.BLOB(),
    },
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  },
  {
    tableName: "files_pdf",
    sequelize,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);
