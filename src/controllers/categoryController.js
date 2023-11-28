import { Response } from '../constants/response.js';
import categoryService from '../services/categoryService.js';

const getAllCategory = async (req, res, next) => {
    const response = new Response();
    
    try {
        const responseFromService =  await categoryService.getAllCategories(req.query.page, req.query.size)

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

const createCategory = async function (req, res, next) {
    const response = new Response();
    try {
        const responseFromService = await categoryService.createCategory(req.body, req.userId)

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

const deleteCategory = async function (req, res, next) {
    const response = new Response();
    try {
        const responseFromService = await categoryService.deleteCategory(req.query.id, req.userId)

        response.status = 200;
        response.message = 'OK';
        response.body = responseFromService;
        //{"id" : '2'}
    } catch (error) {
        console.log('something went wrong: Controller: categoryController.js', error);
        response.status = 400;
        response.message = error.message;
    }
    finally {
        return res.status(response.status).send(response);
    }
};

const putCategory = async function (req, res, next) {
    const response = new Response();
    try {
        const responseFromService = await categoryService.updateCategory(req.query.id, req.body)

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

export default {getAllCategory, createCategory, deleteCategory, putCategory};