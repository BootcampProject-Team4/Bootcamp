import { Response } from '../constants/response.js';
import seatService from '../services/seatService.js';

const getAllSeat = async (req, res, next) => {
    const response = new Response();
    try {
        const responseFromService = await seatService.getAllSeats(
          req.query.page,
          req.query.size
        );

        response.status = 200;
        response.message = 'ok';
        response.body = responseFromService;
    } catch (error) {
        console.log('something went wrong: Controller: seatController.js', error);
        response.status = 400;
        response.message = error.message;
    }
    return res.status(response.status).send(response);
};

const createSeat = async function (req, res, next) {
    const response = new Response();
    try {
        const responseFromService = await seatService.createSeat(req.body, req.userId)

        response.status = 200;
        response.message = 'OK';
        response.body = responseFromService;

    } catch (error) {
        console.log('something went wrong: Controller: seatController.js', error);
        response.status = 400;
        response.message = error.message;
    }
    finally {
        return res.status(response.status).send(response);
    }
};

const deleteSeat = async function (req, res, next) {
    const response = new Response();
    try {
        const responseFromService = await seatService.deleteSeat(req.query.id, req.userId)

        response.status = 200;
        response.message = 'OK';
        response.body = responseFromService;

    } catch (error) {
        console.log('something went wrong: Controller: seatController.js', error);
        response.status = 400;
        response.message = error.message;
    }
    finally {
        return res.status(response.status).send(response);
    }
};

const putSeat = async function (req, res, next) {
    const response = new Response();
    try {
        const responseFromService = await seatService.updateSeat(req.query.id, req.body)

        response.status = 200;
        response.message = 'OK';
        response.body = responseFromService;

    } catch (error) {
        console.log('something went wrong: Controller: seatController.js', error);
        response.status = 400;
        response.message = error.message;
    }
    finally {
        return res.status(response.status).send(response);
    }
};

export default { getAllSeat, createSeat, deleteSeat, putSeat };