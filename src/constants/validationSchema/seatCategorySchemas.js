import Joi from "joi";

const seatCategorySchema = Joi.object({
  id: Joi.number().integer().positive(),
  name: Joi.string().required(),
});

export default seatCategorySchema;
