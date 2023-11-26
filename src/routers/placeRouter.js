import express from "express";
import placeController from "../controllers/placeController.js";


const router = express.Router();
router.get(
    "/", 
    placeController.getAllPlace
);

router.post(
    "/", 
    placeController.createAllPlace
    );

router.delete(
    "/", 
    placeController.deleteAllPlace
    );

router.put(
    "/", 
    placeController.putAllPlace
    );
export default router;