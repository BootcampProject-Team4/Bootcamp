import Joi from 'joi';

const activitySchema = Joi.object({  
  name: Joi.string().required(),
  startdate: Joi.string().regex(/^\d{4}-\d{2}-\d{2}$/).required(),
  enddate:  Joi.string().regex(/^\d{4}-\d{2}-\d{2}$/).required(),
  starttime: Joi.string().pattern(new RegExp('^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$')).required(),
  endtime: Joi.string().pattern(new RegExp('^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$')).required(),
  description: Joi.string(),
  placeid: Joi.number().required(),
  categoryid: Joi.number().required()
});
//place id eklenmeli category_id
export default {activitySchema};
