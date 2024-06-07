import React from 'react';
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { FaChevronLeft , FaChevronRight  } from 'react-icons/fa';

const localizer = momentLocalizer(moment);

const CustomToolbar = (toolbar) => {
  const goToBack = () => {
    toolbar.onNavigate('PREV');
  };

  const goToNext = () => {
    toolbar.onNavigate('NEXT');
  };

  const goToCurrent = () => {
    toolbar.onNavigate('TODAY');
  };

  return (
    <div className="rbc-toolbar">
      <span className="rbc-btn-group left-manage">
        <button type="button" onClick={goToBack}>
          <FaChevronLeft />
        </button>
        <button type="button" onClick={goToCurrent}>
          Today
        </button>
        <button type="button" onClick={goToNext}>
          <FaChevronRight />
        </button>
      </span>
      <div className="rbc-toolbar-label">{toolbar.label}</div>
      <span className="rbc-btn-group right-manage">
        <button className='fc-button-active' type="button" onClick={() => toolbar.onView('month')}>Month</button>
        <button type="button" onClick={() => toolbar.onView('week')}>Week</button>
        <button type="button" onClick={() => toolbar.onView('day')}>Day</button>
      </span>
    </div>
  );
};

const KanbanCalendarView = (props) => {
  const myEventsList = [
    {
      title: "Meeting",
      start: new Date(2024, 5, 7, 10, 0), // June 12, 2024, 10:00 AM
      end: new Date(2024, 5, 8, 12, 0), // June 12, 2024, 12:00 PM
    },
    {
      title: "Lunch Break",
      start: new Date(2024, 5, 13, 12, 0), // June 13, 2024, 12:00 PM
      end: new Date(2024, 5, 13, 13, 0), // June 13, 2024, 1:00 PM
    },
  ];

  return (
    <div className="flex-1">
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        className="calendar-ai"
        style={{ height: 'calc(100vh - 20rem)' }}
        views={['month', 'week', 'day']}
        defaultView={Views.MONTH}
        step={60}
        timeslots={1}
        components={{
          toolbar: CustomToolbar
        }}
        workWeekStart={1} // 1 for Monday, default is Sunday (0)
        workWeekEnd={5} // 5 for Friday, default is Saturday (6)
      />
    </div>
  );
};

export default KanbanCalendarView;
