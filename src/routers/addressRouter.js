import express from "express";
import addressController from "../controllers/addressController.js";


const router = express.Router();
router.get(
    "/", 
    addressController.getAllAddress
);

router.post(
    "/", 
    addressController.createAllAddress
    );

router.delete(
    "/", 
    addressController.deleteAllAddress
    );

router.put(
    "/", 
    addressController.putAllAddress
    );
export default router;
