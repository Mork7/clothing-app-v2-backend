import mongoose from "mongoose";
import express from "express";
import { PORT, MONGO_DB_URL } from "./config.js";
import cors from "cors";
import itemsRoute from "./routes/itemsRoute.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome To Clothing App");
});

app.use('/items', itemsRoute);

mongoose
  .connect(MONGO_DB_URL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
