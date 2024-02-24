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

const PORT = process.env.PORT || 5100;

app.listen(PORT, () => console.log(`server running on port ${PORT}...`));
