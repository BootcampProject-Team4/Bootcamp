import express from "express";
import seatController from "../controllers/seatController.js";
import joiSchemaValidation from "../middleware/joiSchemaValidation.js";
import seatSchemas from "../constants/validationSchema/seatSchemas.js";
import commonSchemas from "../constants/validationSchema/commonSchemas.js";

const router = express.Router();
router.get(
  "/",
  joiSchemaValidation.validateQuerryParams(commonSchemas.paginationSchema),
  seatController.getAllSeat
);

router.post(
  "/",
  joiSchemaValidation.validateBody(seatSchemas.seatSchema),
  seatController.createSeat
);

router.delete(
  "/",
  joiSchemaValidation.validateQuerryParams(commonSchemas.idSchema),
  seatController.deleteSeat
);

router.put(
  "/",
  joiSchemaValidation.validateQuerryParams(commonSchemas.idSchema),
  joiSchemaValidation.validateBody(seatSchemas.seatSchema),
  seatController.putSeat
);
    
export default router;