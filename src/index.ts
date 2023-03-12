import * as express from 'express';
import { config } from 'dotenv';

config({});

const app = express.default();

app.get('/api/health', (req, res) => {
  console.log(`health`);
  res.json({ health: 'API is UP and running !!! 🔥' });
});

app.listen(process.env.PORT, () => {
  console.log(`Listenting to port ${process.env.PORT} 🔥!`);
});
