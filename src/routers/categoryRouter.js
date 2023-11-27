import express from 'express';
import categoryController from '../controllers/categoryController.js';
import joiSchemaValidation from '../middleware/joiSchemaValidation.js';
import categorySchemas from '../constants/validationSchema/categorySchemas.js';




const router = express.Router();
router.get(
    '/',
    categoryController.getAllCategory,
    joiSchemaValidation.validateQuerryParams(categorySchemas),
);

router.post( 
    '/',
    categoryController.createAllCategory,
    joiSchemaValidation.validateBody(categorySchemas),
);

router.delete(
    '/',
    categoryController.deleteAllCategory,
    joiSchemaValidation.validateQuerryParams(categorySchemas),
);

router.put(
  "/",
  categoryController.putAllCategory,
  joiSchemaValidation.validateQuerryParams(categorySchemas)
);
export default router;