// IMPORTS
import * as dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import cors from 'cors';

// HELPERS
import errorHandler from './middleware/error-handler.middleware';

// DOTENV
dotenv.config();

// SERVER
const server = express();

// DATABASE

// MIDDLEWARE
server.use(cors());

// HEALTHCHECK
server.use('/api/healthcheck', (req: Request, res: Response) => {
  res.send({ data: 'The server is up and running' });
});

// ROUTES

// ERROR HANDLING
server.use(errorHandler);

// EXPORT
export default server;
