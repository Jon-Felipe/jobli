import { readFile } from 'fs/promises';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import Job from './models/JobModel.js';

try {
  await mongoose.connect(process.env.MONGO_URL);
  const jsonJobs = JSON.parse(
    await readFile(new URL('./utils/mock_jobs.json', import.meta.url))
  );
  await Job.deleteMany();
  await Job.create(jsonJobs);
  console.log('success');
  process.exit(0);
} catch (error) {
  console.log(error);
  process.exit(1);
}
