import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { sequelize } from "./index";
import { User } from "./user";

export class DataUser extends Model<
  InferAttributes<DataUser>,
  InferCreationAttributes<DataUser>
> {
  declare id: CreationOptional<number>;
  declare userId?: User;
  declare image: string;
  declare pdf: BinaryData;
  declare created_at: CreationOptional<Date>;
  declare updated_at: CreationOptional<Date>;
}
DataUser.init(
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
    image: {
      type: new DataTypes.STRING(128),
    },
    pdf: {
      type: new DataTypes.BLOB(),
    },
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  },
  {
    tableName: "data_user",
    sequelize,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);
