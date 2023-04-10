// IMPORTS
import { NextFunction, Request, Response } from 'express';
import HttpException from '../../helpers/HttpException';
import { getCalendarEvents } from '../../api/google/index';

// GET EVENTS
const getEvents = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const events = await getCalendarEvents();

    if (!events)
      throw new HttpException(404, '', 'Error getting calendar events');

    res.send(events);
  } catch (error: any) {
    next(error);
  }
};

export { getEvents };
