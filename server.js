import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import { StatusCodes } from 'http-status-codes';

// routers
import authRoutes from './routes/authRoutes.js';

// middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/v1/auth', authRoutes);

app.use('*', (req, res) => {
  res.status(StatusCodes.NOT_FOUND).json({ msg: 'not found' });
});

app.use((err, req, res, next) => {
  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ msg: 'something went wrong' });
});

const PORT = process.env.PORT || 5100;

app.listen(PORT, () => console.log(`server running on port ${PORT}...`));
