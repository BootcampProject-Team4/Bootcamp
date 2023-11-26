import express from "express";
import userController from "../controllers/userController.js";


const router = express.Router();
router.get(
    "/", 
    userController.getAllUser
);

router.post(
    "/", 
    userController.createAllUser
    );

router.delete(
    "/", 
    userController.deleteAllUser
    );

router.put(
    "/", 
    userController.putAllUser
    );
export default router;