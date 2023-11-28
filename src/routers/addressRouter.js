import express from "express";
import addressController from "../controllers/addressController.js";
import joiSchemaValidation from "../middleware/joiSchemaValidation.js";
import addressSchemas from "../constants/validationSchema/addressSchemas.js";
import commonSchemas from "../constants/validationSchema/commonSchemas.js";

const router = express.Router();

router.get(
  "/",

  joiSchemaValidation.validateQuerryParams(commonSchemas.paginationSchema),
  addressController.getAllAddress
);

router.post(
  "/",
  joiSchemaValidation.validateBody(addressSchemas.addressSchema),
  addressController.createAddress
);

router.delete(
  "/",
  joiSchemaValidation.validateQuerryParams(commonSchemas.idSchema),
  addressController.deleteAddress
);

router.put(
  "/",
  joiSchemaValidation.validateQuerryParams(commonSchemas.idSchema),
  joiSchemaValidation.validateBody(addressSchemas.addressSchema),
  addressController.putAddress
);

export default router;
