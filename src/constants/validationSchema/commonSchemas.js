import Joi from "joi";

const idSchema = Joi.object({
  id: Joi.string().required(),  
});

const nameSchema = Joi.object({
  name: Joi.string().required(),
});

const paginationSchema = Joi.object({
  size: Joi.string().required(),
  page: Joi.string().required(),
});

export default { idSchema, nameSchema, paginationSchema };
