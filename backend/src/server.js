import express from 'express';
import {ENV} from './lib/env.js';


const app = express();


app.get("/health", (req, res) => {
  res.status(200).json({message: "Server is Up and running!"})
})


app.listen(ENV.PORT, () => {
  console.log(`Server started on  http://localhost:${ENV.PORT}`);
});