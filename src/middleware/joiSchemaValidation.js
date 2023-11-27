import Joi from "joi";
import { Response } from "../constants/response.js";

const validateObjectSchema = (data, schema) => {
  const result = Joi.attempt(data, schema, { convert: false });
  if (result.error) {
    const errorDetails = result.error.details.map((value) => {
      return {
        error: value.message,
        path: value.path,
      };
    });
    return errorDetails;
  }
  return null;
};

const validateBody = (schema) => {
  return (req, res, next) => {
    let response = new Response();
    const error = validateObjectSchema(req.body, schema);
    if (error) {
      response.body = error;
      return res.status(response.status).send(response);
    }
    return next();
  };
};

const validateQuerryParams = (schema) => {
  return (req, res, next) => {
    let response = new Response();
    const error = validateObjectSchema(req.query, schema);
    if (error) {
      response.body = error;
      return res.status(response.status).send(response);
    }
    return next();
  };
};

export default { validateBody, validateQuerryParams };
