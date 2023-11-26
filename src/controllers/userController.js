import { Response } from "../constants/response.js";
import userService from "../services/userService.js";

const getAllUser = async (req, res, next) => {
  const response = new Response();
  try {
    const responseFromService = await userService.getAllUsers();

    response.status = 200;
    response.message = "ok";
    response.body = responseFromService;
  } catch (error) {
    console.log("something went wrong: Controller: userController.js", error);
    response.status = 400;
    response.message = error.message;
  }
  return res.status(response.status).send(response);
};

const createAllUser = async function (req, res, next) {
  const response = new Response();
  try {
    const responseFromService = await userService.createUser(
      req.body,
      req.userId
    );

    response.status = 200;
    response.message = "OK";
    response.body = responseFromService;
  } catch (error) {
    console.log("something went wrong: Controller: userController.js", error);
    response.status = 400;
    response.message = error.message;
  } finally {
    return res.status(response.status).send(response);
  }
};

const deleteAllUser = async function (req, res, next) {
  const response = new Response();
  try {
    const responseFromService = await userService.deleteUser(
      req.query.id,
      req.userId
    );

    response.status = 200;
    response.message = "OK";
    response.body = responseFromService;
  } catch (error) {
    console.log("something went wrong: Controller: userController.js", error);
    response.status = 400;
    response.message = error.message;
  } finally {
    return res.status(response.status).send(response);
  }
};

const putAllUser = async function (req, res, next) {
  const response = new Response();
  try {
    const responseFromService = await userService.updateUser(
      req.query.id,
      req.body
    );

    response.status = 200;
    response.message = "OK";
    response.body = responseFromService;
  } catch (error) {
    console.log("something went wrong: Controller: userController.js", error);
    response.status = 400;
    response.message = error.message;
  } finally {
    return res.status(response.status).send(response);
  }
};

export default { getAllUser, createAllUser, deleteAllUser, putAllUser };
