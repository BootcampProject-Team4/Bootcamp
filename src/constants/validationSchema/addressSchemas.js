import Joi from "joi";

const addressSchema = Joi.object({ 
  city: Joi.string().required(),
  district: Joi.string().required(),
  neighborhood: Joi.string().required(),
  street: Joi.string(),
  gatenumber: Joi.number().integer(),
});

export default {addressSchema};
