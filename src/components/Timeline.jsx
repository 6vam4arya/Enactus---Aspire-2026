import React, { useState, useEffect, useMemo } from "react";

export default function Timeline() {
  const events = useMemo(
    () => [
      {
        id: 1,
        title: "Ideathon",
        date: "2026-03-19T12:00:00",
        tooltipTitle: "TBD",
        desc: "Pitch if you dare",
      },
      {
        id: 2,
        title: "Case Twist",
        date: "2026-03-19T12:00:00",
        tooltipTitle: "TBD",
        desc: "A completely 'normal' case competition",
      },
      {
        id: 3,
        title: "Stratazenith",
        date: "2026-03-19T13:00:00",
        tooltipTitle: "TBD",
        desc: "Gauntlet of challenging events",
      },
      {
        id: 4,
        title: "Fake Pitchathon",
        date: "2026-03-19T14:00:00",
        tooltipTitle: "TBD",
        desc: "A satirical idea-presentation competition.",
      },
      {
        id: 5,
        title: "Musical Performance",
        date: "2026-03-19T16:00:00",
        tooltipTitle: "TBD",
        desc: "Get ready for an afternoon of melodies",
      },
      {
        id: 6,
        title: "UXElix",
        date: "2026-03-20T12:00:00",
        tooltipTitle: "TBD",
        desc: "Ready to solve a brand crisis from the inside out?",
      },
      {
        id: 7,
        title: "B PLAN",
        date: "2026-03-20T12:00:00",
        tooltipTitle: "TBD",
        desc: "Pitch your business",
      },
      {
        id: 8,
        title: "Vichaar to Venture",
        date: "2026-03-20T14:00:00",
        tooltipTitle: "TBD",
        desc: "Small ideas, big impact",
      },
      {
        id: 9,
        title: "Bridge The Gap",
        date: "2026-03-20T14:00:00",
        tooltipTitle: "TBD",
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
      className="w-full bg-[#1a1a1a] min-h-screen flex flex-col items-center justify-center px-4 py-12 md:px-8 font-sans antialiased overflow-hidden"
      id="timeline"
    >
      <h1
        className="text-white text-5xl md:text-8xl font-bold tracking-wider mb-16 md:mb-24 uppercase text-center w-full"
        style={{ fontFamily: '"Bebas Neue", sans-serif', fontWeight: 400 }}
      >
        Timeline
      </h1>

      <div className="relative w-full max-w-7xl">
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
                      <p className="text-[10px] text-gray-500 mt-2">
                        {new Date(event.date).toLocaleString("en-IN", {
                          day: "numeric",
                          month: "short",
                          hour: "numeric",
                          minute: "numeric",
                          hour12: true,
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="hidden md:block relative w-full overflow-x-auto pb-8">
          <div
            className="relative mx-auto"
            style={{
              width: `${Math.max(events.length * 260, 1350)}px`,
              height: "460px",
              paddingLeft: "120px",
              paddingRight: "120px",
            }}
          >
            <div className="absolute left-[120px] right-[120px] top-1/2 h-[4px] -translate-y-1/2 bg-[#FFD700]" />

            {events.map((event, index) => {
              const isPast = index < activeIndex;
              const isActive = index === activeIndex;
              const isAbove = index % 2 === 1;

              const usableWidth = Math.max(events.length * 260, 1350) - 240;
              const x =
                events.length === 1
                  ? usableWidth / 2 + 120
                  : 120 + (index * usableWidth) / (events.length - 1);

              return (
                <div
                  key={event.id}
                  className="absolute top-0 group"
                  style={{
                    left: `${x}px`,
                    width: "220px",
                    height: "100%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <div className="relative w-full h-full">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                      {isActive ? (
                        <div className="w-11 h-11 border-[4px] border-[#FFD700] bg-[#1a1a1a] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,198,0,0.6)] transition-all duration-300 group-hover:scale-125">
                          <svg
                            className="w-3 h-3 fill-[#FFD700] -translate-x-[1px]"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      ) : (
                        <div
                          className={`bg-[#FFD700] rounded-full transition-all duration-300 group-hover:scale-150 ${
                            isPast
                              ? "w-5 h-5 shadow-[0_0_12px_rgba(255,198,0,0.35)]"
                              : "w-5 h-5"
                          }`}
                        />
                      )}
                    </div>

                    <div
                      className={`absolute left-1/2 -translate-x-1/2 text-center w-max max-w-[240px] ${
                        isAbove ? "top-[20vh]" : "top-[33vh]"
                      }`}
                    >
                      <div
                        className={`inline-block uppercase tracking-wide transition-all duration-300 text-3xl leading-none ${
                          isActive
                            ? "bg-[#FFD700] text-black px-5 py-3 rounded-xl shadow-lg"
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
                    </div>

                    <div
                      className={`absolute left-1/2 -translate-x-1/2 z-30 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 ${
                        isAbove ? "top-[33vh]" : "top-[2vh]"
                      }`}
                    >
                      <div className="relative w-[300px] rounded-2xl bg-[#1d2a3d] border border-[#2f4058] shadow-2xl px-6 py-5 text-center">
                        <p
                          className="text-[#FFD700] text-2xl mb-3 uppercase leading-none"
                          style={{
                            fontFamily: '"Bebas Neue", sans-serif',
                            fontWeight: 400,
                          }}
                        >
                          {event.tooltipTitle}
                        </p>

                        <div className="w-full h-px bg-[#40526b] mb-4" />

                        <p className="text-gray-300 text-base leading-relaxed mb-4">
                          {event.desc}
                        </p>

                        <p className="text-[15px] text-gray-500 mt-2">
                          {new Date(event.date).toLocaleString("en-IN", {
                            day: "numeric",
                            month: "short",
                            hour: "numeric",
                            minute: "numeric",
                            hour12: true,
                          })}
                        </p>

                        <div
                          className={`absolute left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-l-transparent border-r-transparent ${
                            isAbove
                              ? "top-[-10px] border-b-[10px] border-b-[#1d2a3d]"
                              : "bottom-[-10px] border-t-[10px] border-t-[#1d2a3d]"
                          }`}
                        />
                      </div>
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
