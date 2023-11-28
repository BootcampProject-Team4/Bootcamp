import { Response } from '../constants/response.js';
import placeService from '../services/placeService.js';


const getById = async (req, res, next) => {
  const response = new Response();
  try {
    const responseFromService = await placeService.getById(req.query.id);

    response.status = 200;
    response.message = "ok";
    response.body = responseFromService;
  } catch (error) {
    console.log(
      "something went wrong: Controller: placeController.js",
      error
    );
    response.status = 400;
    response.message = error.message;
  }
  return res.status(response.status).send(response);
};

const getAllPlace = async (req, res, next) => {
    const response = new Response();
    try {
        const responseFromService = await placeService.getAllPlaces(
          req.query.page,
          req.query.size
        );

        response.status = 200;
        response.message = 'ok';
        response.body = responseFromService;
    } catch (error) {
        console.log('something went wrong: Controller: placeController.js', error);
        response.status = 400;
        response.message = error.message;
    }
    return res.status(response.status).send(response);
};

const createPlace = async function (req, res, next) {
    const response = new Response();
    try {
        const responseFromService = await placeService.createPlace(req.body, req.userId)

        response.status = 200;
        response.message = 'OK';
        response.body = responseFromService;

    } catch (error) {
        console.log('something went wrong: Controller: placeController.js', error);
        response.status = 400;
        response.message = error.message;
    }
    finally {
        return res.status(response.status).send(response);
    }
};

const deletePlace = async function (req, res, next) {
    const response = new Response();
    try {
        const responseFromService = await placeService.deletePlace(req.query.id, req.userId)

        response.status = 200;
        response.message = 'OK';
        response.body = responseFromService;

    } catch (error) {
        console.log('something went wrong: Controller: placeController.js', error);
        response.status = 400;
        response.message = error.message;
    }
    finally {
        return res.status(response.status).send(response);
    }
};

const putPlace = async function (req, res, next) {
    const response = new Response();
    try {
        const responseFromService = await placeService.updatePlace(req.query.id, req.body)

        response.status = 200;
        response.message = 'OK';
        response.body = responseFromService;

    } catch (error) {
        console.log('something went wrong: Controller: placeController.js', error);
        response.status = 400;
        response.message = error.message;
    }
    finally {
        return res.status(response.status).send(response);
    }
};

export default { getAllPlace, createPlace, deletePlace, putPlace, getById };