// @desc    Get all jobs
// @route   GET /api/v1/jobs
// @access  Public
export const getAllJobs = async (req, res) => {
  res.send('get all jobs');
};

// @desc    Get single job
// @route   GET /api/v1/jobs/:id
// @access  Public
export const getSingleJob = async (req, res) => {
  res.send('get single job');
};
