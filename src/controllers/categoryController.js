import { Response } from '../constants/response.js';
import categoryService from '../services/categoryService.js';

const getAllCategory = async (req, res, next) => {
    const response = new Response();
    try {
        const responseFromService =  await categoryService.getAll(req.query, req.userId);

        response.status = 200;
        response.message = 'ok';
        response.body = responseFromService;
    } catch (error) {
        console.log('something went wrong: Controller: categoryController.js', error);
        response.status = 400;
        response.message = error.message;
    }
    return res.status(response.status).send(response);
};

const createAllCategory = async function (req, res, next) {
    const response = new Response();
    try {
        const responseFromService = await categoryService.createAllCategory(req.query, req.userId)

        response.status = 200;
        response.message = 'OK';
        response.body = responseFromService;

    } catch (error) {
        console.log('something went wrong: Controller: categoryController.js', error);
        response.status = 400;
        response.message = error.message;
    }
    finally {
        return res.status(response.status).send(response);
    }
};

const deleteAllCategory = async function (req, res, next) {
    const response = new Response();
    try {
        const responseFromService = await categoryService.deleteAllCategory(req.query, req.userId)

        response.status = 200;
        response.message = 'OK';
        response.body = responseFromService;

    } catch (error) {
        console.log('something went wrong: Controller: categoryController.js', error);
        response.status = 400;
        response.message = error.message;
    }
    finally {
        return res.status(response.status).send(response);
    }
};

const putAllCategory = async function (req, res, next) {
    const response = new Response();
    try {
        const responseFromService = await categoryService.putAllCategory(req.query, req.userId)

        response.status = 200;
        response.message = 'OK';
        response.body = responseFromService;

    } catch (error) {
        console.log('something went wrong: Controller: categoryController.js', error);
        response.status = 400;
        response.message = error.message;
    }
    finally {
        return res.status(response.status).send(response);
    }
};

export default {getAllCategory, createAllCategory, deleteAllCategory, putAllCategory};