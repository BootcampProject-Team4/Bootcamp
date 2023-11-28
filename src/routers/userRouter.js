import express from "express";
import userController from "../controllers/userController.js";
import joiSchemaValidation from "../middleware/joiSchemaValidation.js";
import userSchemas from "../constants/validationSchema/userSchemas.js";
import commonSchemas from "../constants/validationSchema/commonSchemas.js";
import { checkUser } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post(
  "/login",
  joiSchemaValidation.validateBody(userSchemas.loginSchema),
  userController.login
);

router.get(
  "/id",
  checkUser,
  joiSchemaValidation.validateQuerryParams(commonSchemas.idSchema),
  userController.getById
);

router.get(
  "/",
  checkUser,
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
  checkUser,
  joiSchemaValidation.validateQuerryParams(commonSchemas.idSchema),
  userController.deleteUser
);

router.put(
  "/",
  checkUser,
  joiSchemaValidation.validateQuerryParams(commonSchemas.idSchema),
  joiSchemaValidation.validateBody(userSchemas.userSchema),
  userController.putUser
);
    
export default router;