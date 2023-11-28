import express from "express";
import seatcategoryController from "../controllers/seatcategoryController.js";
import joiSchemaValidation from "../middleware/joiSchemaValidation.js";
import commonSchemas from "../constants/validationSchema/commonSchemas.js";


const router = express.Router();
router.get(
  "/",
  joiSchemaValidation.validateQuerryParams(commonSchemas.paginationSchema),
  seatcategoryController.getAllSeatcategory
);

router.post(
  "/",
  joiSchemaValidation.validateBody(commonSchemas.nameSchema),
  seatcategoryController.createSeatcategory
);

router.delete(
  "/",
  joiSchemaValidation.validateQuerryParams(commonSchemas.idSchema),
  seatcategoryController.deleteSeatcategory
);

router.put(
  "/",
  joiSchemaValidation.validateQuerryParams(commonSchemas.idSchema),
  joiSchemaValidation.validateBody(commonSchemas.nameSchema),
  seatcategoryController.putSeatcategory
);
    
export default router;