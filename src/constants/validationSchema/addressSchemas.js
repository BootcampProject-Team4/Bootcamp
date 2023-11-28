import Joi from "joi";

const addressSchema = Joi.object({ 
  city: Joi.string().required(),
  district: Joi.string().required(),
  neighborhood: Joi.string().required(),
  street: Joi.number().integer(),
  gatenumber: Joi.number().integer(),
});

export default {addressSchema};
