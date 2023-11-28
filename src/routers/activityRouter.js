import express from 'express';
import activityController from '../controllers/activityController.js';
import joiSchemaValidation from '../middleware/joiSchemaValidation.js';
import activitySchemas from "../constants/validationSchema/activitySchemas.js";
import commonSchemas from "../constants/validationSchema/commonSchemas.js";

const router = express.Router();
router.get(
  "/",
  joiSchemaValidation.validateQuerryParams(commonSchemas.paginationSchema),
  activityController.getAllActivity
);

router.post(
  "/",
  joiSchemaValidation.validateBody(activitySchemas.activitySchema),
  activityController.createActivity
);

router.delete(
  "/",
  joiSchemaValidation.validateQuerryParams(commonSchemas.idSchema),
  activityController.deleteActivity
);

router.put(
  "/",
  joiSchemaValidation.validateQuerryParams(commonSchemas.idSchema),
  joiSchemaValidation.validateBody(activitySchemas.activitySchema),
  activityController.putActivity
);

export default router;