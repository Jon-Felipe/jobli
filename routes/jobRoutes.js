import express from 'express';
const router = express.Router();
import { getAllJobs, getSingleJob } from '../controllers/jobController.js';

router.get('/', getAllJobs);
router.get('/:id', getSingleJob);

export default router;
