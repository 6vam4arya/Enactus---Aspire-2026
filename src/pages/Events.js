import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const eventData = {
  'DAY 1': [
    {
      id: 1,
      title: 'Opening Ceremony',
      description: 'Kick off the event with excitement',
      image: 'https://via.placeholder.com/400x300?text=Event+1',
    },
    {
      id: 2,
      title: 'Tech Talk',
      description: 'Learn from industry experts',
      image: 'https://via.placeholder.com/400x300?text=Event+2',
    },
    {
      id: 3,
      title: 'Networking',
      description: 'Connect with professionals',
      image: 'https://via.placeholder.com/400x300?text=Event+3',
    },
    {
      id: 4,
      title: 'Workshop',
      description: 'Hands-on learning experience',
      image: 'https://via.placeholder.com/400x300?text=Event+4',
    },
  ],
  'DAY 2': [
    {
      id: 5,
      title: 'Keynote Speech',
      description: 'Inspiring talk by renowned speaker',
      image: 'https://via.placeholder.com/400x300?text=Event+5',
    },
    {
      id: 6,
      title: 'Panel Discussion',
      description: 'Expert insights and debates',
      image: 'https://via.placeholder.com/400x300?text=Event+6',
    },
    {
      id: 7,
      title: 'Demo Session',
      description: 'See latest innovations',
      image: 'https://via.placeholder.com/400x300?text=Event+7',
    },
    {
      id: 8,
      title: 'Team Building',
      description: 'Fun activities and games',
      image: 'https://via.placeholder.com/400x300?text=Event+8',
    },
  ],
  'DAY 3': [
    {
      id: 9,
      title: 'Closing Session',
      description: 'Summary and takeaways',
      image: 'https://via.placeholder.com/400x300?text=Event+9',
    },
    {
      id: 10,
      title: 'Awards Ceremony',
      description: 'Celebrate outstanding achievements',
      image: 'https://via.placeholder.com/400x300?text=Event+10',
    },
    {
      id: 11,
      title: 'Gala Dinner',
      description: 'Fine dining and networking',
      image: 'https://via.placeholder.com/400x300?text=Event+11',
    },
    {
      id: 12,
      title: 'Farewell',
      description: 'Until next year!',
      image: 'https://via.placeholder.com/400x300?text=Event+12',
    },
  ],
};

const days = ['DAY 1', 'DAY 2', 'DAY 3'];

export default function Events() {
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const currentDay = days[currentDayIndex];
  const currentEvents = eventData[currentDay];

  const goToPreviousDay = () => {
    setCurrentDayIndex((prev) => (prev === 0 ? days.length - 1 : prev - 1));
  };

  const goToNextDay = () => {
    setCurrentDayIndex((prev) => (prev === days.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      {/* Events Header */}
      <section className="bg-[radial-gradient(circle_at_center,_#000000,_#1f2937)] text-white py-1 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-bebas text-9xl">EVENTS</h1>
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

      {/* Events Cards Grid (2x2) with Background - NO OVERLAY */}
      <section className="bg-[#212121] text-white px-4">
        <section
        className="py-16 px-4 bg-cover bg-center bg-no-repeat mb-0"
        style={{ 
          backgroundImage: `url('${process.env.PUBLIC_URL}/Images/HeroEvents.png')`,
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentEvents.map((event) => (
              <div
                key={event.id}
                className="bg-primary rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 flex flex-col h-80"
              >
                {/* Image Section (80%) */}
                <div className="h-4/5 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Section (20%) */}
                <div className="h-1/5 bg-primary text-black p-4 flex flex-col justify-center">
                  <h3 className=" text-lg mb-1">{event.title}</h3>
                  <p className="text-sm text-gray-800 truncate">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </section>
    </div>
  );
}