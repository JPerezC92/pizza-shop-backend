import dotenv from 'dotenv';
dotenv.config();
import './db';
import express from 'express';

const app = express();
app.use('/', (req, res) => {
  res.send('Hello World');
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
