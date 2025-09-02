import type { EventItem } from './types.ts';
import { addDays, addHours } from 'date-fns';

const today = new Date();
today.setHours(0, 0, 0, 0);

export const mockEventData: EventItem[] = [
  createEvent('Meeting Last Week', -7, 13, 15),
  createEvent('Meeting Today', 0, 9, 10),
  createEvent('Lunch', 0, 12, 13, { description: 'Lunch with the team' }),
  createEvent('Meeting Next Week', 7, 10, 12),
];

interface IEventCreationOptions {
  description?: string;
}

function createEvent(
  title: string,
  dayOffset: number,
  startHour: number,
  endHour: number,
  options?: IEventCreationOptions
): EventItem {
  return {
    title,
    start: addHours(addDays(today, dayOffset), startHour),
    end: addHours(addDays(today, dayOffset), endHour),
    description: options?.description ?? '',
  };
}
