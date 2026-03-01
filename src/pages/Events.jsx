import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { IMAGES, EVENT_IMAGES } from "../constants/imageConstants";

const eventData = {
  "DAY 1": [
    {
      id: 1,
      title: "Opening Ceremony",
      description: "Kick off the event with excitement",
      image: EVENT_IMAGES.DAY_1[0],
    },
    {
      id: 2,
      title: "Tech Talk",
      description: "Learn from industry experts",
      image: EVENT_IMAGES.DAY_1[1],
    },
    {
      id: 3,
      title: "Networking",
      description: "Connect with professionals",
      image: EVENT_IMAGES.DAY_1[2],
    },
    {
      id: 4,
      title: "Workshop",
      description: "Hands-on learning experience",
      image: EVENT_IMAGES.DAY_1[3],
    },
  ],
  "DAY 2": [
    {
      id: 5,
      title: "Keynote Speech",
      description: "Inspiring talk by renowned speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker  speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker speaker",
      image: EVENT_IMAGES.DAY_2[0],
    },
    {
      id: 6,
      title: "Panel Discussion",
      description: "Expert insights and debates",
      image: EVENT_IMAGES.DAY_2[1],
    },
    {
      id: 7,
      title: "Demo Session",
      description: "See latest innovations",
      image: EVENT_IMAGES.DAY_2[2],
    },
    {
      id: 8,
      title: "Team Building",
      description: "Fun activities and games",
      image: EVENT_IMAGES.DAY_2[3],
    },
  ],
  "DAY 3": [
    {
      id: 9,
      title: "Closing Session",
      description: "Summary and takeaways",
      image: EVENT_IMAGES.DAY_3[0],
    },
    {
      id: 10,
      title: "Awards Ceremony",
      description: "Celebrate outstanding achievements",
      image: EVENT_IMAGES.DAY_3[1],
    },
    {
      id: 11,
      title: "Gala Dinner",
      description: "Fine dining and networking",
      image: EVENT_IMAGES.DAY_3[2],
    },
    {
      id: 12,
      title: "Farewell",
      description: "Until next year!",
      image: EVENT_IMAGES.DAY_3[3],
    },
  ],
};

const days = ["DAY 1", "DAY 2", "DAY 3"];

export default function Events() {
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const [expandedCardId, setExpandedCardId] = useState(null);
  const currentDay = days[currentDayIndex];
  const currentEvents = eventData[currentDay];

  const goToPreviousDay = () => {
    setCurrentDayIndex((prev) => (prev === 0 ? days.length - 1 : prev - 1));
  };

  const goToNextDay = () => {
    setCurrentDayIndex((prev) => (prev === days.length - 1 ? 0 : prev + 1));
  };

  const toggleCardExpand = (cardId) => {
    setExpandedCardId(expandedCardId === cardId ? null : cardId);
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
            <button
              onClick={goToPreviousDay}
              className="bg-primary text-black p-3 rounded-full hover:opacity-85 transition-opacity duration-300 shadow-lg"
              aria-label="Previous day"
            >
              <ChevronLeft size={24} />
            </button>

            <h2 className="text-4xl text-center min-w-[150px]">{currentDay}</h2>

            <button
              onClick={goToNextDay}
              className="bg-primary text-black p-3 rounded-full hover:opacity-85 transition-opacity duration-300 shadow-lg"
              aria-label="Next day"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            {days.map((day, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentDayIndex(idx)}
                className={`px-6 py-2 rounded transition-all duration-300 ${
                  idx === currentDayIndex
                    ? "bg-yellow-300 text-black"
                    : "bg-yellow-400 text-black hover:bg-yellow-300"
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Cards Grid */}
      <section className="bg-[#212121] text-white px-4">
        <section
          className="py-16 px-4 bg-cover bg-center bg-no-repeat mb-0"
          style={{
            backgroundImage: `url('${process.env.PUBLIC_URL}/Images/HeroEvents.png')`,
            backgroundAttachment: "fixed",
          }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentEvents.map((event) => (
                <div
                  key={event.id}
                  onClick={() => toggleCardExpand(event.id)}
                  className="bg-primary rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 flex flex-row h-80 cursor-pointer relative"
                >
                  {/* LEFT SIDE - Image (70% when normal, 30% when expanded) */}
                  <div
                    className="h-full overflow-hidden transition-all duration-500 ease-in-out flex items-center justify-center bg-black"
                    style={{
                      width: expandedCardId === event.id ? "30%" : "70%",
                      transform:
                        expandedCardId === event.id
                          ? "translateX(0%)"
                          : "translateX(0)",
                      opacity: expandedCardId === event.id ? 0.75 : 1,
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* RIGHT SIDE - Vertical Title (30% - visible when not expanded) */}
                  <div
                    className="h-full w-1/5 bg-primary flex items-center mx-10 justify-center transition-all duration-500 overflow-hidden"
                    style={{
                      opacity: expandedCardId === event.id ? 0 : 1,
                      transform:
                        expandedCardId === event.id
                          ? "translateX(100%)"
                          : "translateX(0)",
                      pointerEvents:
                        expandedCardId === event.id ? "none" : "auto",
                    }}
                  >
                    <div className="flex flex-col items-center justify-center h-full gap-0">
                      {event.title.split(" ").map((word, wordIdx, words) => (
                        <div
                          key={wordIdx}
                          className="flex flex-col items-center"
                        >
                          {word.split("").map((char, charIdx) => (
                            <span
                              key={charIdx}
                              className="font-bold text-black leading-tight"
                              style={{
                                // Scale font based on container height divided by letters
                                fontSize: `calc(${900 / (0.6*event.title.length)}% )`,
                                maxHeight: `${900 /(0.6*event.title.length)}%`,
                              }}
                            >
                              {char}
                            </span>
                          ))}

                          {wordIdx < words.length - 1 && (
                            <div className="h-2"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Horizontal Content (70% - visible when expanded) */}
                  <div
                    className="absolute top-0 right-0 h-full bg-primary flex flex-col items-center justify-center p-6 transition-all duration-500"
                    style={{
                      width: expandedCardId === event.id ? "70%" : "0%",
                      opacity: expandedCardId === event.id ? 1 : 0,
                      pointerEvents:
                        expandedCardId === event.id ? "auto" : "none",
                    }}
                  >
                    {/* Title */}
                    <div>
                      <h3 className="text-6xl text-black mb-4">
                        {event.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <div className="flex-grow flex">
                      <p 
                      className="text-m text-gray-800 leading-relaxed"
                        style={{
                                // Scale font based on container height divided by letters
                                fontSize: `calc(${200 / (1.01**(0.1*event.description.length))}% )`,
                              }}>
                        {event.description}
                      </p>
                    </div>
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
