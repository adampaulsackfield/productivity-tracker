// IMPORTS
import { google } from 'googleapis';
import * as dotenv from 'dotenv';

// DOTENV CONFIG
dotenv.config();

// CONSTANTS
const GOOGLE_CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID;
const SCOPES = ['https://www.googleapis.com/auth/calendar'];

// METHODS
const getCalendarEvents = async (): Promise<any> => {
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: './credentials.json',
      scopes: SCOPES,
    });

    const calendar = google.calendar({
      version: 'v3',
      auth,
    });

    const events = await calendar.events.list({
      calendarId: GOOGLE_CALENDAR_ID,
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',
    });

    return events.data.items;
  } catch (error: any) {
    return null;
  }
};

export { getCalendarEvents };
