import express from 'express';
import activityController from '../controllers/activityController.js';


const router = express.Router();
router.get(
    '/',
    activityController.getAllActivity
);

router.post( 
    '/',
    activityController.createAllActivity
);

router.delete(
    '/',
    activityController.deleteAllActivity
);

router.put(
    '/',
    activityController.putAllActivity
);
export default router;