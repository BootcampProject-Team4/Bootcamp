import { Response } from '../constants/response.js';
import activityService from '../services/activityService.js';
const getAllActivity = async (req, res, next) => {
    const response = new Response();
    try {
        const responseFromService =  await activityService.getAllActivities()

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

const createActivity = async function (req, res, next) {
    const response = new Response();
    try {
        const responseFromService = await activityService.createActivity(req.body, req.userId)

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

const deleteActivity = async function (req, res, next) {
    const response = new Response();
    try {
        const responseFromService = await activityService.deleteActivity(req.query.id, req.userId)

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

const putActivity = async function (req, res, next) {
    const response = new Response();
    try {
        const responseFromService = await activityService.updateActivity(req.query.id, req.body)

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

export default {getAllActivity, createActivity, deleteActivity, putActivity};