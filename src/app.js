import express from "express";
import cors from "cors";
import sequelize from "@db/index.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

sequelize.sync().then(() => {
  console.log("Database synchronized");
});

app.use(express.json({ limit: "16kb" }));

export { app };
