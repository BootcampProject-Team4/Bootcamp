import express from 'express';
import categoryController from '../controllers/categoryController.js';




const router = express.Router();
router.get(
    '/',
    categoryController.getAllCategory
);

router.post( 
    '/',
    categoryController.createAllCategory
);

router.delete(
    '/',
    categoryController.deleteAllCategory
);

router.put(
    '/',
    categoryController.putAllCategory
);
export default router;