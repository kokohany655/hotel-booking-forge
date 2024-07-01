import express, { NextFunction, Request, Response } from "express";
import { verifyToken } from "../middleware/auth";
import { createHotelValidator } from "../validator/hotelValidator";
import { createHotel, uploadHotelImage, uploadImages } from "../services/hotel";

const router = express.Router();

router.route("/").post(
  verifyToken,
  uploadHotelImage,

  createHotelValidator,
  uploadImages,
  createHotel
);

export default router;
