import { StatusCodes } from 'http-status-codes';

import Job from '../models/JobModel.js';

// @desc    Get all jobs
// @route   GET /api/v1/jobs
// @access  Public
export const getAllJobs = async (req, res) => {
  const jobs = await Job.find({});
  const totalJobs = await Job.countDocuments();

  res.status(StatusCodes.OK).json({ totalJobs, jobs });
};

// @desc    Get single job
// @route   GET /api/v1/jobs/:id
// @access  Public
export const getSingleJob = async (req, res) => {
  res.send('get single job');
};
