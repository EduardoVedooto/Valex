import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mainRouter from './routers/index.js';
import { errorHandlingMiddleware } from './middlewares/index.js';

dotenv.config();

const server = express();
server.use(express.json());
server.use(cors());
server.use(mainRouter);
server.use(errorHandlingMiddleware);

server.listen(process.env.SERVER_PORT, () => {
  console.log(`Server listening, :${process.env.SERVER_PORT}`);
});
