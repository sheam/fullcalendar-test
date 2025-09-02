import type { ReactElement } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { mockEventData } from './mockEventData.ts';

export const Schedule = (): ReactElement => (
  <FullCalendar
    plugins={[dayGridPlugin]}
    initialView='dayGridMonth'
    events={mockEventData}
  />
);
