import express from "express";
import addressController from "../controllers/addressController.js";
import joiSchemaValidation from "../middleware/joiSchemaValidation.js";
import addressSchemas from "../constants/validationSchema/addressSchemas.js";
import commonSchemas from "../constants/validationSchema/commonSchemas.js";
import { checkUser } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get(
  "/id",
  checkUser,
  joiSchemaValidation.validateQuerryParams(commonSchemas.idSchema),
  addressController.getById
);

router.get(
  "/",
  checkUser,
  joiSchemaValidation.validateQuerryParams(commonSchemas.paginationSchema),
  addressController.getAllAddress
);

router.post(
  "/",
  checkUser,
  joiSchemaValidation.validateBody(addressSchemas.addressSchema),
  addressController.createAddress
);

router.delete(
  "/",
  checkUser,
  joiSchemaValidation.validateQuerryParams(commonSchemas.idSchema),
  addressController.deleteAddress
);

router.put(
  "/",
  checkUser,
  joiSchemaValidation.validateQuerryParams(commonSchemas.idSchema),
  joiSchemaValidation.validateBody(addressSchemas.addressSchema),
  addressController.putAddress
);

export default router;
