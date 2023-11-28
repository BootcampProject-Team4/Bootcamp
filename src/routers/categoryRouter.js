import express from 'express';
import categoryController from '../controllers/categoryController.js';
import joiSchemaValidation from '../middleware/joiSchemaValidation.js';
import commonSchemas from '../constants/validationSchema/commonSchemas.js';
import { checkUser } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get(
  "/id",
  checkUser,
  joiSchemaValidation.validateQuerryParams(commonSchemas.idSchema),
  categoryController.getById
);

router.get(
  "/",
  checkUser,
  joiSchemaValidation.validateQuerryParams(commonSchemas.paginationSchema),
  categoryController.getAllCategory
);

router.post(
  "/",
  checkUser,
  joiSchemaValidation.validateBody(commonSchemas.nameSchema),
  categoryController.createCategory
);

router.delete(
  "/",
  checkUser,
  joiSchemaValidation.validateQuerryParams(commonSchemas.idSchema),
  categoryController.deleteCategory
);

router.put(
  "/",
  checkUser,
  joiSchemaValidation.validateQuerryParams(commonSchemas.idSchema),
  joiSchemaValidation.validateBody(commonSchemas.nameSchema),
  categoryController.putCategory
);

export default router;