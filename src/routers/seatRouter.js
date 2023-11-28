import express from "express";
import seatController from "../controllers/seatController.js";
import joiSchemaValidation from "../middleware/joiSchemaValidation.js";
import seatSchemas from "../constants/validationSchema/seatSchemas.js";
import commonSchemas from "../constants/validationSchema/commonSchemas.js";
import { checkUser } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get(
  "/id",
  checkUser,
  joiSchemaValidation.validateQuerryParams(commonSchemas.idSchema),
  seatController.getById
);

router.get(
  "/",
  checkUser,
  joiSchemaValidation.validateQuerryParams(commonSchemas.paginationSchema),
  seatController.getAllSeat
);

router.post(
  "/",
  checkUser,
  joiSchemaValidation.validateBody(seatSchemas.seatSchema),
  seatController.createSeat
);

router.delete(
  "/",
  checkUser,
  joiSchemaValidation.validateQuerryParams(commonSchemas.idSchema),
  seatController.deleteSeat
);

router.put(
  "/",
  checkUser,
  joiSchemaValidation.validateQuerryParams(commonSchemas.idSchema),
  joiSchemaValidation.validateBody(seatSchemas.seatSchema),
  seatController.putSeat
);
    
export default router;