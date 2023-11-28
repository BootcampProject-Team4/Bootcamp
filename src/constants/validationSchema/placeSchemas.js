import Joi from "joi";

const placeSchema = Joi.object({  
  name: Joi.string().required(),
  interior: Joi.boolean().required(),
  seatcapacity: Joi.number().integer().required(),
  standcapacity: Joi.number().integer().required(),
  AddressId: Joi.number().integer(), 
});

export default {placeSchema};
