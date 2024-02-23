import { DataTypes, Sequelize } from "sequelize";
import { DataType, Model } from "sequelize";
import { sequelize } from "../database";

interface CandidateInstance extends Model {
  id: number;
  name: string;
  bio: string;
  email: string;
  phone: string;
  openToWork: boolean;
}

export const Candidate = sequelize.define<CandidateInstance>("candidate", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bio: DataTypes.STRING,
  phone: DataTypes.STRING,
  openToWork: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});
