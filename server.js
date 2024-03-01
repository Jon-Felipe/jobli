import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import { StatusCodes } from 'http-status-codes';
import mongoose from 'mongoose';

// routers
import authRoutes from './routes/authRoutes.js';
import jobsRoutes from './routes/jobRoutes.js';

// middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/jobs', jobsRoutes);

app.use('*', (req, res) => {
  res.status(StatusCodes.NOT_FOUND).json({ msg: 'not found' });
});

app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(PORT, () => console.log(`server running on port ${PORT}...`));
} catch (error) {
  console.log(error);
  process.exit(1);
}
