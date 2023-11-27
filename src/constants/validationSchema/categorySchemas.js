import Joi from "joi";

const categorySchema = Joi.object({
  id: Joi.number().integer().positive(),
  name: Joi.string().required(),
});

export default categorySchema;
