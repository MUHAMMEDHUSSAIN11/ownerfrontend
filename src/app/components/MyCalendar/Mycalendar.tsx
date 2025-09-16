'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Settings, Info, Menu } from 'lucide-react';

const CalendarManagement = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState('Week');
  const [showDropdown, setShowDropdown] = useState(false);
  const [events, setEvents] = useState([
    {
      id: 1,
      date: '2024-01-03',
      title: 'Meeting with marketing department',
      time: null
    },
    {
      id: 2,
      date: '2024-01-07',
      title: 'Developer Meetup',
      time: null
    },
    {
      id: 3,
      date: '2024-02-04',
      title: 'Meet with friends',
      time: '9PM'
    }
  ]);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getCurrentMonthDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const days = [];
    const currentDateObj = new Date(startDate);
    
    for (let i = 0; i < 42; i++) {
      const dayData = {
        date: new Date(currentDateObj),
        day: currentDateObj.getDate(),
        isCurrentMonth: currentDateObj.getMonth() === month,
        isToday: currentDateObj.toDateString() === new Date().toDateString(),
        dateString: currentDateObj.toISOString().split('T')[0]
      };
      days.push(dayData);
      currentDateObj.setDate(currentDateObj.getDate() + 1);
    }
    
    return days;
  };

  const getEventsForDate = (dateString : any) => {
    return events.filter(event => event.date === dateString);
  };

  const navigateMonth = (direction : any) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  const days = getCurrentMonthDays();

  return (
    <section className="relative sm:py-8 md:">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-14">
        {/* Header */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-4">
            <h5 className="text-xl leading-8 font-semibold text-gray-900">
              {months[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h5>
            <div className="flex items-center gap-2">
              <button 
                onClick={goToToday}
                className="hidden md:flex py-2 pl-1.5 pr-3 rounded-md bg-gray-50 border border-gray-300 items-center gap-1.5 text-xs font-medium text-gray-900 transition-all duration-500 hover:bg-gray-100"
              >
                <Calendar className="w-4 h-4 pointer-events-none" />
                Today
              </button>
              <button 
                onClick={() => navigateMonth(-1)}
                className="text-gray-500 p-2 rounded transition-all duration-300 hover:bg-gray-100 hover:text-gray-900"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={() => navigateMonth(1)}
                className="text-gray-500 p-2 rounded transition-all duration-300 hover:bg-gray-100 hover:text-gray-900"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center gap-3">
            {/* <div className="flex items-center gap-2">
              <button className="p-3 text-gray-500 flex items-center justify-center transition-all duration-300 hover:text-gray-900">
                <Info className="w-5 h-5" />
              </button>
              <span className="w-px h-7 bg-gray-200"></span>
              <button className="p-3 text-gray-500 flex items-center justify-center transition-all duration-300 hover:text-gray-900">
                <Settings className="w-5 h-5" />
              </button>
            </div> */}
            {/* <div className="flex items-center gap-px p-1 rounded-md bg-gray-100">
              {['Day', 'Week', 'Month'].map((mode) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={`py-2.5 px-5 rounded-lg text-sm font-medium transition-all duration-300 ${
                    viewMode === mode
                      ? 'bg-white text-gray-900'
                      : 'bg-gray-100 text-gray-900 hover:bg-white'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div> */}
          </div>

          {/* Mobile Dropdown */}
          <div className="dropdown relative inline-flex md:hidden">
            <button
              type="button"
              onClick={() => setShowDropdown(!showDropdown)}
              className="dropdown-toggle inline-flex justify-center items-center gap-2 py-1.5 px-2.5 text-sm bg-gray-50 text-gray-900 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-gray-100"
            >
              <Menu className="w-5 h-5" />
              <ChevronRight className={`w-2.5 h-2.5 text-gray-600 transition-transform duration-300 ${showDropdown ? 'rotate-90' : ''}`} />
            </button>
            {showDropdown && (
              <div className="dropdown-menu rounded-xl shadow-lg bg-white absolute top-full w-max -left-20 mt-2 z-10">
                <ul className="py-2">
                  <li>
                    <button
                      onClick={() => {
                        goToToday();
                        setShowDropdown(false);
                      }}
                      className="block w-full text-left px-6 py-2 hover:bg-gray-100 text-gray-600 font-medium"
                    >
                      Current Date
                    </button>
                  </li>
                  <li>
                    <button className="block w-full text-left px-6 py-2 hover:bg-gray-100 text-gray-600 font-medium">
                      Add Event
                    </button>
                  </li>
                  <li className="bg-gray-300 w-full h-px"></li>
                  {['Day', 'Week', 'Month'].map((mode) => (
                    <li key={mode}>
                      <button
                        onClick={() => {
                          setViewMode(mode);
                          setShowDropdown(false);
                        }}
                        className="block w-full text-left px-6 py-2 hover:bg-gray-100 text-gray-600 font-medium"
                      >
                        View {mode}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="border border-gray-200">
          {/* Days of Week Header */}
          <div className="grid grid-cols-7 divide-x divide-gray-200 border-b border-gray-200">
            {daysOfWeek.map((day, index) => (
              <div key={day} className="p-3.5 flex flex-col sm:flex-row items-center justify-between">
                <span className="text-sm font-medium text-gray-500">{day}</span>
                <span className="text-sm font-medium text-gray-900">
                  {days[index] ? days[index].day : ''}
                </span>
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 divide-x divide-gray-200">
            {days.map((dayData, index) => {
              const dayEvents = getEventsForDate(dayData.dateString);
              const isLastRow = Math.floor(index / 7) === 5;
              
              return (
                <div
                  key={index}
                  className={`p-3.5 xl:aspect-auto lg:h-28 flex justify-between flex-col max-lg:items-center min-h-[70px] transition-all duration-300 hover:bg-gray-100 ${
                    !dayData.isCurrentMonth ? 'bg-gray-50' : ''
                  } ${!isLastRow ? 'border-b border-gray-200' : ''}`}
                >
                  <span
                    className={`text-xs font-semibold flex items-center justify-center w-7 h-7 rounded-full ${
                      dayData.isToday
                        ? 'text-white bg-indigo-600'
                        : dayData.isCurrentMonth
                        ? 'text-gray-900'
                        : 'text-gray-500'
                    }`}
                  >
                    {dayData.day}
                  </span>
                  
                  {dayEvents.length > 0 && (
                    <>
                      <span className="hidden lg:block text-xs font-medium text-gray-500 text-center">
                        {dayEvents[0].title}
                        {dayEvents[0].time && (
                          <>
                            <br />
                            {dayEvents[0].time}
                          </>
                        )}
                      </span>
                      <span className="lg:hidden w-2 h-2 rounded-full bg-gray-400"></span>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Events List */}
        <div className="w-full lg:hidden py-8 px-2.5">
          {events
            .filter(event => {
              const eventDate = new Date(event.date);
              return eventDate.getMonth() === currentDate.getMonth() &&
                     eventDate.getFullYear() === currentDate.getFullYear();
            })
            .map((event) => (
              <div key={event.id} className="bg-gray-50 w-full rounded-xl mb-3">
                <div className="p-3 w-full flex items-center justify-between group transition-all duration-300">
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-gray-900">{event.title}</span>
                    <div className="flex items-center gap-2.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M12 8.99998V13L15 16M3 5.12132L5.10714 3M20.998 5.12657L18.8909 3.00525M20 13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13C4 8.5817 7.58172 4.99998 12 4.99998C16.4183 4.99998 20 8.5817 20 13Z" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-xs font-medium text-gray-600">
                        {event.time || 'All day'}
                      </span>
                    </div>
                  </div>
                  <button className="py-1 px-2 rounded border border-gray-400 text-xs font-medium text-gray-900 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    Edit
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default CalendarManagement;