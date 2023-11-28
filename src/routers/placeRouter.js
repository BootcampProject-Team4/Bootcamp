import express from "express";
import placeController from "../controllers/placeController.js";
import joiSchemaValidation from "../middleware/joiSchemaValidation.js";
import placeSchemas from "../constants/validationSchema/placeSchemas.js";
import commonSchemas from "../constants/validationSchema/commonSchemas.js";
import { checkUser } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get(
  "/id",
  checkUser,
  joiSchemaValidation.validateQuerryParams(commonSchemas.idSchema),
  placeController.getById
);

router.get(
  "/",
  checkUser,
  joiSchemaValidation.validateQuerryParams(commonSchemas.paginationSchema),
  placeController.getAllPlace
);

router.post(
  "/",
  checkUser,
  joiSchemaValidation.validateBody(placeSchemas.placeSchema),
  placeController.createPlace
);

router.delete(
  "/",
  checkUser,
  joiSchemaValidation.validateQuerryParams(commonSchemas.idSchema),
  placeController.deletePlace
);

router.put(
  "/",
  checkUser,
  joiSchemaValidation.validateQuerryParams(commonSchemas.idSchema),
  joiSchemaValidation.validateBody(placeSchemas.placeSchema),
  placeController.putPlace
);
    
export default router;