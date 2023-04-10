// IMPORTS
import express from 'express';
import { getEvents } from '../../controllers/Google/Tasks.controller';

// ROUTER
const googleTasksRouter = express.Router();

// ROUTES
googleTasksRouter.route('/').get(getEvents);

export default googleTasksRouter;
