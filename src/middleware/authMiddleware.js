import jwt from "jsonwebtoken";
import { Response } from "../constants/response.js";

export const checkUser = async (req, res, next) => {

  const response = new Response();
  const authHeader = req.get("Authorization");

  if (!authHeader) {
    response.status = 401;
    response.message = "Not authenticated.";
    return res.status(response.status).send(response);
  }
  const token = authHeader.split(" ")[1];
  let decodedToken;

  try {
    decodedToken = jwt.verify(token, process.env.SECRET_KEY);
  } catch (err) {
    response.status = 500;
    response.message = "Not authenticated.";
    return res.status(response.status).send(response);
  }

  if (!decodedToken) {
    response.status = 401;
    response.message = "Not authenticated.";
    return res.status(response.status).send(response);
  }

  req.userId = decodedToken.userId;

  next();
};
