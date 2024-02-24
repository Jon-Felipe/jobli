import express from 'express';
const app = express();

const PORT = 5000;

// middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
