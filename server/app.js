import express from "express";
import morgan from "morgan";
import cors from "cors";

import api from "./api/v1/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cors());
app.use(morgan("dev"));

app.use("/api/v1", api);

app.use((req, res, next) => {
  const statusCode = 400;
  const message = "Error. Route not found";
  next({ statusCode, message });
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Unknown error ocurred!" } = err;
  return res.status(statusCode).json({ message });
});
export default app;
