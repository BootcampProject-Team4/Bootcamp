import express from 'express';
import activityController from '../controllers/activityController.js';
import joiSchemaValidation from '../middleware/joiSchemaValidation.js';
import activitySchemas from "../constants/validationSchema/activitySchemas.js";
import commonSchemas from "../constants/validationSchema/commonSchemas.js";
import  {checkUser} from "../middleware/authMiddleware.js";

const router = express.Router();

router.get(
  "/id",
  checkUser,
  joiSchemaValidation.validateQuerryParams(commonSchemas.idSchema),
  activityController.getById
);

router.get(
  "/",
  checkUser,
  joiSchemaValidation.validateQuerryParams(commonSchemas.paginationSchema),
  activityController.getAllActivity
);



router.post(
  "/",
  checkUser,
  joiSchemaValidation.validateBody(activitySchemas.activitySchema),
  activityController.createActivity
);

router.delete(
  "/",
  checkUser,
  joiSchemaValidation.validateQuerryParams(commonSchemas.idSchema),
  activityController.deleteActivity
);

router.put(
  "/",
  checkUser,
  joiSchemaValidation.validateQuerryParams(commonSchemas.idSchema),
  joiSchemaValidation.validateBody(activitySchemas.activitySchema),
  activityController.putActivity
);

export default router;