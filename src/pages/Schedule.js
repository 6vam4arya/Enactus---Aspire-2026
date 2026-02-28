import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const scheduleData = {
  'DAY 1': [
    {
      id: 1,
      time: '09:00 AM',
      title: 'Registration & Breakfast',
      description: 'Check-in and welcome breakfast',
      duration: '1 hour',
      location: 'Main Hall',
      speaker: 'Team',
    },
    {
      id: 2,
      time: '10:00 AM',
      title: 'Opening Keynote',
      description: 'Welcome speech and event overview',
      duration: '1 hour',
      location: 'Auditorium',
      speaker: 'John Doe',
    },
    {
      id: 3,
      time: '11:15 AM',
      title: 'Tech Workshop - React Basics',
      description: 'Introduction to React framework',
      duration: '1.5 hours',
      location: 'Hall A',
      speaker: 'Jane Smith',
    },
    {
      id: 4,
      time: '01:00 PM',
      title: 'Lunch Break',
      description: 'Networking lunch',
      duration: '1 hour',
      location: 'Cafeteria',
      speaker: 'N/A',
    },
    {
      id: 5,
      time: '02:00 PM',
      title: 'Panel Discussion',
      description: 'Industry experts discussion',
      duration: '1.5 hours',
      location: 'Auditorium',
      speaker: 'Multiple Speakers',
    },
    {
      id: 6,
      time: '04:00 PM',
      title: 'Networking Session',
      description: 'Meet and greet with speakers',
      duration: '1 hour',
      location: 'Lobby',
      speaker: 'Team',
    },
  ],
  'DAY 2': [
    {
      id: 7,
      time: '09:00 AM',
      title: 'Breakfast & Coffee',
      description: 'Morning refreshments',
      duration: '30 mins',
      location: 'Cafeteria',
      speaker: 'Team',
    },
    {
      id: 8,
      time: '09:30 AM',
      title: 'Advanced JavaScript Workshop',
      description: 'Deep dive into JavaScript',
      duration: '2 hours',
      location: 'Hall B',
      speaker: 'Mike Johnson',
    },
    {
      id: 9,
      time: '11:30 AM',
      title: 'Product Demo Session',
      description: 'Live product demonstrations',
      duration: '1 hour',
      location: 'Auditorium',
      speaker: 'Product Team',
    },
    {
      id: 10,
      time: '01:00 PM',
      title: 'Lunch Break',
      description: 'Lunch and networking',
      duration: '1 hour',
      location: 'Cafeteria',
      speaker: 'N/A',
    },
    {
      id: 11,
      time: '02:00 PM',
      title: 'Startup Pitch Competition',
      description: 'Watch innovative startups pitch',
      duration: '2 hours',
      location: 'Auditorium',
      speaker: 'Founders',
    },
    {
      id: 12,
      time: '04:30 PM',
      title: 'Evening Cocktail',
      description: 'Casual networking event',
      duration: '1.5 hours',
      location: 'Rooftop Lounge',
      speaker: 'N/A',
    },
  ],
   'DAY 3': [
    {
      id: 13,
      time: '09:00 AM',
      title: 'Breakfast & Checkout',
      description: 'Final morning refreshments',
      duration: '30 mins',
      location: 'Cafeteria',
      speaker: 'Team',
    },
    {
      id: 14,
      time: '09:30 AM',
      title: 'Closing Panel Discussion',
      description: 'Insights and takeaways',
      duration: '1.5 hours',
      location: 'Auditorium',
      speaker: 'Industry Leaders',
    },
    {
      id: 15,
      time: '11:15 AM',
      title: 'Award Ceremony',
      description: 'Recognize outstanding contributions',
      duration: '45 mins',
      location: 'Auditorium',
      speaker: 'Organizers',
    },
    {
      id: 16,
      time: '12:15 PM',
      title: 'Closing Remarks',
      description: 'Final words from organizers',
      duration: '30 mins',
      location: 'Auditorium',
      speaker: 'Event Lead',
    },
    {
      id: 17,
      time: '01:00 PM',
      title: 'Farewell Lunch',
      description: 'Final networking lunch',
      duration: '1.5 hours',
      location: 'Banquet Hall',
      speaker: 'N/A',
    },
    {
      id: 18,
      time: '02:30 PM',
      title: 'Event Concludes',
      description: 'See you next year!',
      duration: '-',
      location: 'Venue Exit',
      speaker: 'Team',
    },
  ],
};

const days = ['DAY 1', 'DAY 2', 'DAY 3'];

export default function Schedule() {
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const [expandedId, setExpandedId] = useState(null);

  const currentDay = days[currentDayIndex];
  const currentSchedule = scheduleData[currentDay];

  const goToPreviousDay = () => {
    setCurrentDayIndex((prev) => (prev === 0 ? days.length - 1 : prev - 1));
  };

  const goToNextDay = () => {
    setCurrentDayIndex((prev) => (prev === days.length - 1 ? 0 : prev + 1));
  };

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div>
      {/* Schedule Header */}
      <section className="bg-[radial-gradient(circle_at_center,_#000000,_#1f2937)] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl ">SCHEDULE</h1>
          <p className="text-xl mt-4 opacity-90">
            Plan your event experience with our detailed schedule
          </p>
        </div>
      </section>

      {/* Day Navigation */}
      <section className="py-12 px-4 bg-primary">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-8">
            {/* Previous Button */}
            <button
              onClick={goToPreviousDay}
              className="bg-primary text-black p-3 rounded-full hover:opacity-85 transition-opacity duration-300 shadow-lg"
              aria-label="Previous day"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Current Day Display */}
            <h2 className="text-4xl  text-center min-w-[150px]">
              {currentDay}
            </h2>

            {/* Next Button */}
            <button
              onClick={goToNextDay}
              className="bg-primary text-black p-3 rounded-full hover:opacity-85 transition-opacity duration-300 shadow-lg"
              aria-label="Next day"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Day Indicators */}
          <div className="flex justify-center gap-4 mt-8">
            {days.map((day, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentDayIndex(idx)}
                className={`px-6 py-2 rounded  transition-all duration-300 ${
                  idx === currentDayIndex
                    ? 'bg-yellow-300 text-black'
                    : 'bg-yellow-400 text-black hover:bg-yellow-300'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Timeline */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary"></div>

            {/* Schedule Items */}
            <div className="space-y-8">
              {currentSchedule.map((item, index) => (
                <div key={item.id} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -top-0 w-8 h-8 bg-primary rounded-full border-4 border-gray-100 shadow-lg"></div>

                  {/* Schedule Card */}
                  <div
                    className={`${
                      index % 2 === 0 ? 'ml-auto pl-8' : 'mr-auto pr-8'
                    } w-1/2`}
                  >
                    <div
                      onClick={() => toggleExpand(item.id)}
                      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-l-4 border-primary"
                    >
                      {/* Time and Title */}
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="text-primary  text-lg">
                            {item.time}
                          </p>
                          <h3 className="text-xl  text-gray-800 mt-2">
                            {item.title}
                          </h3>
                        </div>
                        <svg
                          className={`w-6 h-6 text-primary transition-transform duration-300 ${
                            expandedId === item.id ? 'transform rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          />
                        </svg>
                      </div>

                      {/* Expanded Content */}
                      {expandedId === item.id && (
                        <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
                          <p className="text-gray-600">
                            <span className=" text-gray-800">
                              Description:{' '}
                            </span>
                            {item.description}
                          </p>
                          <p className="text-gray-600">
                            <span className=" text-gray-800">
                              Duration:{' '}
                            </span>
                            {item.duration}
                          </p>
                          <p className="text-gray-600">
                            <span className=" text-gray-800">
                              Location:{' '}
                            </span>
                            {item.location}
                          </p>
                          <p className="text-gray-600">
                            <span className=" text-gray-800">
                              Speaker:{' '}
                            </span>
                            {item.speaker}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick View Table (Optional) */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl  text-center mb-12">Quick View - {currentDay}</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary">
                  <th className="border border-gray-300 px-6 py-4 text-left  text-black">
                    Time
                  </th>
                  <th className="border border-gray-300 px-6 py-4 text-left  text-black">
                    Event
                  </th>
                  <th className="border border-gray-300 px-6 py-4 text-left  text-black">
                    Location
                  </th>
                  <th className="border border-gray-300 px-6 py-4 text-left  text-black">
                    Speaker
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentSchedule.map((item, index) => (
                  <tr
                    key={item.id}
                    className={`${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    } hover:bg-gray-100 transition-colors duration-300`}
                  >
                    <td className="border border-gray-300 px-6 py-4  text-primary">
                      {item.time}
                    </td>
                    <td className="border border-gray-300 px-6 py-4  text-gray-800">
                      {item.title}
                    </td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-600">
                      {item.location}
                    </td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-600">
                      {item.speaker}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}