import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();

// routers
import authRoutes from './routes/authRoutes.js';

// middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/v1/auth', authRoutes);

app.use('*', (req, res) => {
  res.status(404).json({ msg: 'not found' });
});

app.use((err, req, res, next) => {
  res.status(500).json({ msg: 'something went wrong' });
});

const PORT = process.env.PORT || 5100;

app.listen(PORT, () => console.log(`server running on port ${PORT}...`));
