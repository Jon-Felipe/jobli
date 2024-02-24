import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();

// middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 5100;

app.listen(PORT, () => console.log(`server running on port ${PORT}...`));
