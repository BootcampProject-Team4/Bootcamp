import express from "express";
import userController from "../controllers/userController.js";
import joiSchemaValidation from "../middleware/joiSchemaValidation.js";
import userSchemas from "../constants/validationSchema/userSchemas.js";
import commonSchemas from "../constants/validationSchema/commonSchemas.js";

const router = express.Router();
router.get(
  "/",
  joiSchemaValidation.validateQuerryParams(commonSchemas.paginationSchema),
  userController.getAllUser
);

router.post(
  "/",
  joiSchemaValidation.validateBody(userSchemas.userSchema),
  userController.createUser
);

router.delete(
  "/",
  joiSchemaValidation.validateQuerryParams(commonSchemas.idSchema),
  userController.deleteUser
);

router.put(
  "/",
  joiSchemaValidation.validateQuerryParams(commonSchemas.idSchema),
  joiSchemaValidation.validateBody(userSchemas.userSchema),
  userController.putUser
);
    
export default router;