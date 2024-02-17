import express from "express";
import { Item } from "../models/itemModel.js";

const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const items = await Item.find();

    return response.status(200).json(items);
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
});

export default router;