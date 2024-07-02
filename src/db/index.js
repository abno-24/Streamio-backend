import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DB_NAME,
  "postgres",
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
  }
);

sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully"))
  .catch((err) => console.error("Unable to connect to the database:", err));

export default sequelize;
