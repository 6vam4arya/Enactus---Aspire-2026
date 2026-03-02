import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

export default function Timeline() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Ideathon",
      date: "2026-03-19T12:00:00",
      tooltipTitle: "Loc 1",
      desc: "Pitch if you dare",
    },
    {
      id: 2,
      title: "Stratazenith",
      date: "2026-03-19T14:00:00",
      tooltipTitle: "Loc 2",
      desc: "Gauntlet of challenging events",
    },
    {
      id: 3,
      title: "Fake Pitchathon",
      date: "2026-03-19T16:00:00",
      tooltipTitle: "Loc 3",
      desc: "A satirical idea-presentation competition.",
    },
    {
      id: 4,
      title: "Case Twist",
      date: "2026-03-20T18:00:00",
      tooltipTitle: "Loc 4",
      desc: "A completely 'normal' case competition",
    },
    {
      id: 5,
      title: "UXElix",
      date: "2026-03-20T12:00:00",
      tooltipTitle: "Loc 5",
      desc: "Ready to solve a brand crisis from the inside out?",
    },
    {
      id: 6,
      title: "Vichaar to Venture",
      date: "2026-03-20T14:00:00",
      tooltipTitle: "Loc 6",
      desc: "Small ideas, big impact",
    },
    {
      id: 7,
      title: "B PLAN COMPETITION",
      date: "2026-03-20T16:00:00",
      tooltipTitle: "Loc 7",
      desc: "Pitch your business",
    },
    {
      id: 8,
      title: "Bridge The Gap",
      date: "2026-03-20T18:00:00",
      tooltipTitle: "Loc 8",
      desc: "An electric night to remember",
    },
  ]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const handleEventClick = (index) => {
    setSelectedIndex(index);
  };

  useEffect(() => {
    const now = new Date();
    let newActiveIndex = -1;
    for (let i = events.length - 1; i >= 0; i--) {
      if (new Date(events[i].date) <= now) {
        newActiveIndex = i;
        break;
      }
    }
    if (newActiveIndex === -1) newActiveIndex = 0;
    setActiveIndex(newActiveIndex);

    const interval = setInterval(() => {
      const updatedNow = new Date();
      let updatedIndex = -1;
      for (let i = events.length - 1; i >= 0; i--) {
        if (new Date(events[i].date) <= updatedNow) {
          updatedIndex = i;
          break;
        }
      }
      if (updatedIndex === -1) updatedIndex = 0;
      setActiveIndex(updatedIndex);
    }, 60000);

    return () => clearInterval(interval);
  }, [events]);

  return (
    <div
      className="w-full bg-[#1a1a1a] min-h-[60vh] md:min-h-screen flex flex-col items-center justify-center pb-[10vh] md:p-8 font-sans antialiased overflow-x-hidden"
      id="timeline"
    >
      <h1
        className="text-white text-6xl md:text-8xl font-bold tracking-wider mb-40 uppercase text-center w-full"
        style={{ fontFamily: '"Bebas Neue", sans-serif', fontWeight: 400 }}
      >
        Timeline
      </h1>

      <div className="relative w-[80vw] md:w-full max-w-6xl mx-auto px-4 md:px-8">
        <div className="absolute left-4 right-4 md:left-8 md:right-8 h-1 bg-[#ffc600] top-1/2 -translate-y-1/2 z-0"></div>

        <div className="flex justify-between w-full relative z-10">
          {events.map((event, index) => {
            const isClicked = selectedIndex === index;
            const isCurrent = index === activeIndex;
            const isPast = index < activeIndex;
            const isYellow = index >= 3; // Events 4, 5, 6, 7, 8 (indices 3, 4, 5, 6, 7)
            const isLabelBottom = index % 2 === 0;
            const labelPosClass = isLabelBottom ? "top-10" : "bottom-10";
            const tooltipPosClass = isLabelBottom ? "bottom-8" : "top-8";
            const tooltipArrowClass = isLabelBottom
              ? "after:top-full after:border-t-gray-800 translate-y-2 group-hover:translate-y-0"
              : "after:bottom-full after:border-b-gray-800 -translate-y-2 group-hover:translate-y-0";

            return (
              <button
                key={event.id}
                onClick={() => handleEventClick(index)}
                className="relative w-0 h-0 flex items-center justify-center group cursor-pointer bg-transparent border-none p-0"
                style={{ outline: "none" }}
              >
                {/* Dot */}
                {index === activeIndex ? (
                  <div className="w-10 h-10 border-[4px] border-[#ffc600] bg-[#1a1a1a] rounded-full absolute z-10 flex items-center justify-center shadow-[0_0_20px_rgba(255,198,0,0.6)] transition-all duration-300">
                    <svg
                      className="w-3 h-3 fill-[#ffc600] rotate-45 translate-x-[1px]"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                ) : (
                  <div
                    className={`w-4 h-4 bg-[#ffc600] rounded-full absolute z-10 transition-all duration-300 hover:w-6 hover:h-6 hover:shadow-[0_0_15px_rgba(255,198,0,0.5)] ${isPast ? "shadow-[0_0_10px_rgba(255,198,0,0.3)]" : ""}`}
                  ></div>
                )}

                {/* Label */}
                <div
                  className={`absolute ${labelPosClass} whitespace-nowrap font-bold uppercase tracking-wide transition-all duration-300 text-2xl ${
                    index === activeIndex
                      ? "bg-[#FFB700] text-black px-3 md:px-6 py-1 md:py-2 rounded-lg scale-110 shadow-lg"
                      : isPast
                        ? "text-[#FFD700] hover:scale-105"
                        : "text-white hover:scale-105"
                  }`}
                  style={{
                    fontFamily: '"Bebas Neue", sans-serif',
                    fontWeight: 400,
                  }}
                >
                  {event.title}
                </div>

                {/* Tooltip */}
                <div
                  className={`absolute ${tooltipPosClass} opacity-0 group-hover:opacity-100 transition-all duration-300 w-28 md:w-48 bg-gray-800 text-white rounded-lg p-2 md:p-4 shadow-xl z-50 pointer-events-none text-center border border-gray-700 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:border-[6px] after:border-transparent ${tooltipArrowClass}`}
                >
                  <p
                    className="font-bold text-[#ffc600] mb-1 text-lg tracking-wide"
                    style={{
                      fontFamily: '"Bebas Neue", sans-serif',
                      fontWeight: 400,
                    }}
                  >
                    {event.tooltipTitle}
                  </p>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {event.desc}
                  </p>
                  <p className="text-[10px] text-gray-500 mt-2">
                    {new Date(event.date).toLocaleDateString()}
                  </p>
                  <p className="text-[10px] text-gray-400 mt-1">
                    Click to select
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
