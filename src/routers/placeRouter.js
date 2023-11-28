import express from "express";
import placeController from "../controllers/placeController.js";
import joiSchemaValidation from "../middleware/joiSchemaValidation.js";
import placeSchemas from "../constants/validationSchema/placeSchemas.js";
import commonSchemas from "../constants/validationSchema/commonSchemas.js";

const router = express.Router();
router.get(
  "/",
  joiSchemaValidation.validateQuerryParams(commonSchemas.paginationSchema),
  placeController.getAllPlace
);

router.post(
  "/",
  joiSchemaValidation.validateBody(placeSchemas.placeSchema),
  placeController.createPlace
);

router.delete(
  "/",
  joiSchemaValidation.validateQuerryParams(commonSchemas.idSchema),
  placeController.deletePlace
);

router.put(
  "/",
  joiSchemaValidation.validateQuerryParams(commonSchemas.idSchema),
  joiSchemaValidation.validateBody(placeSchemas.placeSchema),
  placeController.putPlace
);
    
export default router;