import { DataTypes, Model } from "sequelize";
import sequelize from "../db/index.js";

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      validate: {
        isLowercase: true,
      },
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      validate: {
        isLowercase: true,
        isEmail: true,
      },
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      validate: {
        len: [10],
      },
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        is: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{}|\\[\];:'",.<>/?])[\w!@#$%^&*()\-_=+{}|\\[\];:'",.<>/?]{8,}$/,
      },
    },
    token: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      onUpdate: DataTypes.NOW,
    },
    deletedAt: {
      type: DataTypes.DATE,
    },
    isTrashed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: "User",
    timestamps: true,
    paranoid: true,
    underscored: true,
  }
);

export default User;
