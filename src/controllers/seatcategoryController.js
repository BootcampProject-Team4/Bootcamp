import { Response } from "../constants/response.js";
import seatcategoryService from "../services/seatcategoryService.js";

const getById = async (req, res, next) => {
  const response = new Response();
  try {
    const responseFromService = await seatcategoryService.getById(req.query.id);

    response.status = 200;
    response.message = "ok";
    response.body = responseFromService;
  } catch (error) {
    console.log("something went wrong: Controller: seatCategoryController.js", error);
    response.status = 400;
    response.message = error.message;
  }
  return res.status(response.status).send(response);
};

const getAllSeatcategory = async (req, res, next) => {
  const response = new Response();
  try {
    const responseFromService = await seatcategoryService.getAllSeatcategories(
      req.query.page,
      req.query.size
    );

    response.status = 200;
    response.message = "ok";
    response.body = responseFromService;
  } catch (error) {
    console.log("something went wrong: Controller: seatcategoryController.js", error);
    response.status = 400;
    response.message = error.message;
  }
  return res.status(response.status).send(response);
};

const createSeatcategory = async function (req, res, next) {
  const response = new Response();
  try {
    const responseFromService = await seatcategoryService.createSeatcategory(
      req.body,
      req.userId
    );

    response.status = 200;
    response.message = "OK";
    response.body = responseFromService;
  } catch (error) {
    console.log("something went wrong: Controller: seatcategoryController.js", error);
    response.status = 400;
    response.message = error.message;
  } finally {
    return res.status(response.status).send(response);
  }
};

const deleteSeatcategory = async function (req, res, next) {
  const response = new Response();
  try {
    const responseFromService = await seatcategoryService.deleteSeatcategory(
      req.query.id,
      req.userId
    );

    response.status = 200;
    response.message = "OK";
    response.body = responseFromService;
  } catch (error) {
    console.log("something went wrong: Controller: seatcategoryController.js", error);
    response.status = 400;
    response.message = error.message;
  } finally {
    return res.status(response.status).send(response);
  }
};

const putSeatcategory = async function (req, res, next) {
  const response = new Response();
  try {
    const responseFromService = await seatcategoryService.updateSeatcategory(
      req.query.id,
      req.body
    );

    response.status = 200;
    response.message = "OK";
    response.body = responseFromService;
  } catch (error) {
    console.log("something went wrong: Controller: seatcategoryController.js", error);
    response.status = 400;
    response.message = error.message;
  } finally {
    return res.status(response.status).send(response);
  }
};

export default { getAllSeatcategory, createSeatcategory, deleteSeatcategory, putSeatcategory, getById };
