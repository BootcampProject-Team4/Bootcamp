import express from "express";
import seatController from "../controllers/seatController.js";


const router = express.Router();
router.get(
    "/", 
    seatController.getAllSeat
);

router.post(
    "/", 
    seatController.createAllSeat
    );

router.delete(
    "/", 
    seatController.deleteAllSeat
    );

router.put(
    "/", 
    seatController.putAllSeat
    );
export default router;