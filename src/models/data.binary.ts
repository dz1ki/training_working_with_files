import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { sequelize } from "./index";

export class DataBinary extends Model<
  InferAttributes<DataBinary>,
  InferCreationAttributes<DataBinary>
> {
  declare id: CreationOptional<number>;
  declare userId?: number;
  declare name: string;
  declare data: BinaryData;
  declare created_at: CreationOptional<Date>;
  declare updated_at: CreationOptional<Date>;
}
DataBinary.init(
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
    tableName: "data_binary",
    sequelize,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);
