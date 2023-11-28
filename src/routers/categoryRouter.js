import express from 'express';
import categoryController from '../controllers/categoryController.js';
import joiSchemaValidation from '../middleware/joiSchemaValidation.js';
import commonSchemas from '../constants/validationSchema/commonSchemas.js';

const router = express.Router();
router.get(
  "/",
  joiSchemaValidation.validateQuerryParams(commonSchemas.paginationSchema),
  categoryController.getAllCategory
);

router.post(
  "/",
  joiSchemaValidation.validateBody(commonSchemas.nameSchema),
  categoryController.createCategory
);

router.delete(
  "/",
  joiSchemaValidation.validateQuerryParams(commonSchemas.idSchema),
  categoryController.deleteCategory
);

router.put(
  "/",
  joiSchemaValidation.validateQuerryParams(commonSchemas.idSchema),
  joiSchemaValidation.validateBody(commonSchemas.nameSchema),
  categoryController.putCategory
);

export default router;