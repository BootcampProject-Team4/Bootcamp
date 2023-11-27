import Joi from "joi";

const seatSchema = Joi.object({
  id: Joi.number().integer().positive(),
  benchseat: Joi.string(),
  number: Joi.number().integer(),
  pay: Joi.number().integer(),
  PlaceId: Joi.number().integer(), 
});

export default seatSchema;
