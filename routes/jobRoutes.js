import express from 'express';
const router = express.Router();
import { getAllJobs, getSingleJob } from '../controllers/jobController.js';
import { validateIdParam } from '../middleware/validationMiddleware.js';

router.get('/', getAllJobs);
router.get('/:id', validateIdParam, getSingleJob);

export default router;
