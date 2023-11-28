import express from "express";
import seatcategoryController from "../controllers/seatcategoryController.js";
import joiSchemaValidation from "../middleware/joiSchemaValidation.js";
import commonSchemas from "../constants/validationSchema/commonSchemas.js";
import { checkUser } from "../middleware/authMiddleware.js";


const router = express.Router();

router.get(
  "/id",
  checkUser,
  joiSchemaValidation.validateQuerryParams(commonSchemas.idSchema),
  seatcategoryController.getById
);

router.get(
  "/",
  checkUser,
  joiSchemaValidation.validateQuerryParams(commonSchemas.paginationSchema),
  seatcategoryController.getAllSeatcategory
);

router.post(
  "/",
  checkUser,
  joiSchemaValidation.validateBody(commonSchemas.nameSchema),
  seatcategoryController.createSeatcategory
);

router.delete(
  "/",
  checkUser,
  joiSchemaValidation.validateQuerryParams(commonSchemas.idSchema),
  seatcategoryController.deleteSeatcategory
);

router.put(
  "/",
  checkUser,
  joiSchemaValidation.validateQuerryParams(commonSchemas.idSchema),
  joiSchemaValidation.validateBody(commonSchemas.nameSchema),
  seatcategoryController.putSeatcategory
);
    
export default router;