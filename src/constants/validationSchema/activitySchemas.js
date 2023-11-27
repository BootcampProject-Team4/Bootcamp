import Joi from 'joi';

const activitySchema = Joi.object({
  id: Joi.number().integer().positive(),
  name: Joi.string().required(),
  startdate: Joi.date().iso().required(),
  enddate: Joi.date().iso().required(),
  starttime: Joi.string().pattern(new RegExp('^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$')).required(),
  endtime: Joi.string().pattern(new RegExp('^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$')).required(),
  description: Joi.string(),
  capacity: Joi.number().integer(),
});

export default activitySchema;
