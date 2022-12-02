import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { sequelize } from "./index";

export class DataLink extends Model<
  InferAttributes<DataLink>,
  InferCreationAttributes<DataLink>
> {
  declare id: CreationOptional<number>;
  declare userId?: number;
  declare name: string;
  declare data: string;
  declare created_at: CreationOptional<Date>;
  declare updated_at: CreationOptional<Date>;
}
DataLink.init(
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
    tableName: "data_link",
    sequelize,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);
