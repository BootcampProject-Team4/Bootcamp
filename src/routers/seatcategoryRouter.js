import express from "express";
import seatcategoryController from "../controllers/seatcategoryController.js";


const router = express.Router();
router.get(
    "/", 
    seatcategoryController.getAllSeatcategory
);

router.post(
    "/", 
    seatcategoryController.createAllSeatcategory
    );

router.delete(
    "/", 
    seatcategoryController.deleteAllSeatcategory
    );

router.put(
    "/", 
    seatcategoryController.putAllSeatcategory
    );
export default router;