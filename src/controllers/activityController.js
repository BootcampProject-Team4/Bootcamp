import { Response } from '../constants/response.js';
import activityService from '../services/activityService.js';
const getAllActivity = async (req, res, next) => {
    const response = new Response();
    try {
        const responseFromService =  await activityService.getAll(req.body, req.userId);

        response.status = 200;
        response.message = 'ok';
        response.body = responseFromService;
    } catch (error) {
        console.log('something went wrong: Controller: activityController.js', error);
        response.status = 400;
        response.message = error.message;
    }
    return res.status(response.status).send(response);
};

const createAllActivity = async function (req, res, next) {
    const response = new Response();
    try {
        const responseFromService = await activityService.create(req.body, req.userId)

        response.status = 200;
        response.message = 'OK';
        response.body = responseFromService;

    } catch (error) {
        console.log('something went wrong: Controller: activityController.js', error);
        response.status = 400;
        response.message = error.message;
    }
    finally {
        return res.status(response.status).send(response);
    }
};

const deleteAllActivity = async function (req, res, next) {
    const response = new Response();
    try {
        const responseFromService = await activityService.deleteAll(req.query, req.userId)

        response.status = 200;
        response.message = 'OK';
        response.body = responseFromService;

    } catch (error) {
        console.log('something went wrong: Controller: activityController.js', error);
        response.status = 400;
        response.message = error.message;
    }
    finally {
        return res.status(response.status).send(response);
    }
};

const putAllActivity = async function (req, res, next) {
    const response = new Response();
    try {
        const responseFromService = await activityService.updateAll(req.query, req.userId)

        response.status = 200;
        response.message = 'OK';
        response.body = responseFromService;

    } catch (error) {
        console.log('something went wrong: Controller: activityController.js', error);
        response.status = 400;
        response.message = error.message;
    }
    finally {
        return res.status(response.status).send(response);
    }
};

export default {getAllActivity, createAllActivity, deleteAllActivity, putAllActivity};