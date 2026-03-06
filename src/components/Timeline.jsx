import React, { useState, useEffect, useMemo } from "react";

export default function Timeline() {
  const events = useMemo(
    () => [
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
        desc: "Find the missing piece",
      },
    ],
    [],
  );

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const updateActiveIndex = () => {
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
    };

    updateActiveIndex();
    const interval = setInterval(updateActiveIndex, 60000);
    return () => clearInterval(interval);
  }, [events]);

  return (
    <div
      className="w-full bg-[#1a1a1a] min-h-screen flex flex-col items-center justify-center px-4 py-12 md:p-8 font-sans antialiased overflow-hidden"
      id="timeline"
    >
      <h1
        className="text-white text-5xl md:text-8xl font-bold tracking-wider mb-16 md:mb-40 uppercase text-center w-full"
        style={{ fontFamily: '"Bebas Neue", sans-serif', fontWeight: 400 }}
      >
        Timeline
      </h1>

      <div className="relative w-full max-w-6xl">
        <div className="relative md:hidden w-full max-w-md mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-[#FFD700]" />

          <div className="flex flex-col gap-10">
            {events.map((event, index) => {
              const isPast = index < activeIndex;
              const isActive = index === activeIndex;
              const isLeft = index % 2 === 0;

              return (
                <div key={event.id} className="relative min-h-[140px]">
                  <div className="absolute left-1/2 top-6 -translate-x-1/2 z-10">
                    {isActive ? (
                      <div className="w-10 h-10 border-[4px] border-[#FFD700] bg-[#1a1a1a] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,198,0,0.6)] transition-all duration-300">
                        <svg
                          className={`w-3 h-3 fill-[#FFD700] ${isLeft ? "rotate-180 -translate-x-[1px]" : "translate-x-[1px]"}`}
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    ) : (
                      <div
                        className={`w-4 h-4 bg-[#FFD700] rounded-full transition-all duration-300 ${
                          isPast ? "shadow-[0_0_10px_rgba(255,198,0,0.3)]" : ""
                        }`}
                      />
                    )}
                  </div>

                  <div
                    className={`w-[calc(50%-20px)] ${
                      isLeft
                        ? "mr-auto pr-6 text-right"
                        : "ml-auto pl-6 text-left"
                    }`}
                  >
                    <div
                      className={`inline-block font-bold uppercase tracking-wide transition-all duration-300 text-xl sm:text-2xl ${
                        isActive
                          ? "bg-[#FFD700] text-black px-4 py-2 rounded-lg scale-105 shadow-lg"
                          : isPast
                            ? "text-[#FFD700]"
                            : "text-white"
                      }`}
                      style={{
                        fontFamily: '"Bebas Neue", sans-serif',
                        fontWeight: 400,
                      }}
                    >
                      {event.title}
                    </div>

                    <div className="mt-3 bg-gray-800 text-white rounded-lg p-4 shadow-xl border border-gray-700">
                      <p
                        className="font-bold text-[#FFD700] mb-1 text-lg tracking-wide"
                        style={{
                          fontFamily: '"Bebas Neue", sans-serif',
                          fontWeight: 400,
                        }}
                      >
                        {event.tooltipTitle}
                      </p>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {event.desc}
                      </p>
                      <p className="text-[10px] text-gray-500 mt-2">TBD</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
