import Joi from "joi";

const userSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
});

export default userSchema;
