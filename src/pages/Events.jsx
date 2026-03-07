import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const eventData = {
  "DAY 1": [
    {
      id: 1,
      title: "IDEATHON",
      description:
        "Ideathon is a sustainability-focused innovation challenge where teams develop scalable, financially viable solutions aligned with the United Nations Sustainable Development Goals.",
      location: "TBD",
      timings: "12:00-5:00",
      link: "https://unstop.com/competitions/greencap-ideathon-netaji-subhas-university-of-technology-nsut-delhi-1650717",
      image: "/Images/Events/B-plan.png",
      poc1: "Srishti: 9289527768",
      poc2: "Bhavishya: 9205404959",
    },
    {
      id: 2,
      title: "Stratazenith",
      description:
        "This event is designed to test participants’ ability to think strategically under uncertainty. Blending concepts from economics, market simulations, and applied game theory,",
      location: "TBD",
      timings: "1:00PM-4:00PM",
      image: "/Images/Events/Strat.png",
      link: "https://unstop.com/competitions/stratazenith-netaji-subhas-university-of-technology-nsut-delhi-1650314",
      poc1: "Ryan: 9310342610",
      poc2: "Prakhyat: 9971226534",
    },
    {
      id: 3,
      title: "FAKE PITCH",
      description:
        "Participants must convince the judges that their ridiculous idea is the next billion-dollar unicorn. The event blends entrepreneurship parody with stand-up energy - sharp wit, straight-face delivery, and spontaneous humor are key. NOTE: This event is open for Enactus society members only",
      location: "TBD",
      timings: "2:00-6:00",
      link: "https://unstop.com/competitions/fake-pitch-netaji-subhash-university-of-technology-main-campus-1650355?lb=TtgL5L9l&utm_medium=Share&utm_source=competitions&utm_campaign=Yashmgup72623",
      image: "/Images/Events/FakePitch.png",
      poc1: "Shashank: 9671647148",
      poc2: "Raghav: 9667420239",
    },
    {
      id: 4,
      title: "CASE TWIST",
      description: "A 'normal' case competition with a unique 'twist'",
      location: "TBD",
      timings: "12:00-5:00",
      link: "https://unstop.com/competitions/case-twist-netaji-subhas-university-of-technology-nsut-delhi-1651181",
      image: "/Images/Events/Case Twist.png",
      poc1: "Aryan: 9821195901",
      poc2: "Shreyansh: 9999355552",
    },
    {
      id: 5,
      title: "MUSICAL PERFORMANCE",
      description:
        "An exciting musical showcase by the talented musicians of NSUT. A perfect blend of melodies and rhythms to set the tone for an unforgettable evening.",
      location: "TBD",
      timings: "4:00-6:00",
      link: "",
      image: "/Images/Events/MusicPerformance.png",
      poc1: "",
      poc2: "",
    },
  ],
  "DAY 2": [
    {
      id: 6,
      title: "UXELIX",
      description:
        "Dive into real-world case studies to identify the UX failures, from dark patterns to inaccessible interfaces that amplify a crisis, and pitch a comprehensive redesign solution.",
      location: "TBD",
      timings: "12:00-6:00",
      image: "/Images/Events/UXElix.png",
      link: "https://unstop.com/competitions/uxelix-ux-crisis-reconstruction-challenge-netaji-subhas-university-of-technology-nsut-delhi-1650350",
      poc1: "Tisha : 7428938139",
      poc2: "Nirvan: 9971767449",
    },
    {
      id: 7,
      title: "VICHAAR TO VENTURE",
      description:
        "V2V is a high-intensity Venture Capital Simulation competition where teams act as investment firms managing a sustainability-focused fund under real-world market uncertainty",
      location: "TBD",
      timings: "2:00-5:00",
      image: "/Images/Events/V2V.png",
      link: "https://unstop.com/competitions/v2v-vichaar-to-venture-netaji-subhas-university-of-technology-nsut-delhi-1650360",
      poc1: "Srishti: 9289527768",
      poc2: "Bhavishya: 9205404959",
    },
    {
      id: 8,
      title: "B-PLAN COMP",
      description:
        "Teams will pariticpate in a head on head business planning competition",
      location: "TBD",
      timings: "12:00-5:00",
      image: "/Images/Events/B-plan.png",
      link: "https://unstop.com/competitions/business-plan-competition-aspire26-netaji-subhas-university-of-technology-nsut-delhi-1650260",
      poc1: "Shashank: 9671647148",
      poc2: "Harehar: 9819969922",
    },
    {
      id: 9,
      title: "BRIDGE THE GAP",
      description:
        "The competition invites participants to apply fundamental engineering principles to design and construct a free-standing structure using limited, predefined materials that can support maximum load while maintaining stability for a fixed duration.",
      location: "TBD",
      timings: "2:00-6:00",
      image: "/Images/Events/BridgeTheGap.png",
      link: "https://unstop.com/competitions/bridge-the-gap-netaji-subhas-university-of-technology-nsut-delhi-1650675?lb=TtgL5L9l&utm_medium=Share&utm_source=yashmgup72623&utm_campaign=Competitions",
      poc1: "Yatika: 7011443593",
      poc2: "Nishtha: 9711031008",
    },
    {
      id: 10,
      title: "Artist Showcase",
      description:
        "An exiciting showcase of enticing entertainment which you'll regret to miss. Its a secret, not one to dissapoint.",
      location: "TBD",
      timings: "TBD",
      image: "/Images/Events/Artist.png",
      link: " ",
      poc1: "Ryan: 9310342610",
      poc2: "Prakhyat: 9971226534",
    },
  ],
};

const days = ["DAY 1", "DAY 2"];

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
      <section className="bg-[#212121] text-white py-1 px-4">
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

      {/* Events Cards Grid (2x2) with Background - NO OVERLAY */}
      <section className="w-full bg-[#212121] text-white px-4">
        <section
          className=" py-16 px-4 bg-cover bg-center bg-no-repeat mb-0"
          style={{
            backgroundImage: `url('${process.env.PUBLIC_URL}/Images/HeroEvents.png')`,
            backgroundAttachment: "fixed",
          }}
        >
          <div className="max-w-6xl mx-auto ">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
              {currentEvents.map((event) => (
                <Link to={event.link} target="_blank">
                  <div
                    className="mx-auto group bg-primary rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 flex flex-col w-full max-w-xl"
                    id={event.id}
                  >
                    <div className="relative rounded-2xl overflow-hidden w-full max-w-xl">
                      <img
                        src={event.image}
                        alt={event.id}
                        className="w-full h-80 object-cover transition-transform duration-700 ease-out md:group-hover:scale-105"
                      />

                      {/* Bottom panel */}
                      <div className="absolute inset-x-0 bottom-0">
                        <div className="bg-primary/90 p-4">
                          <h3 className="mt-[1%] text-center text-2xl font-semibold text-black">
                            {event.title}
                          </h3>

                          {/* DEFAULT expanded on <md, collapsed on md+, hover expands on md+ */}
                          <div
                            className="
            mt-2 text-sm text-gray-800 px-4
            max-h-80 opacity-100 translate-y-0 overflow-hidden
            transition-[max-height,opacity,transform] duration-700 ease-out

            md:max-h-0 md:opacity-0 md:translate-y-1
            md:group-hover:max-h-80 md:group-hover:opacity-100 md:group-hover:translate-y-0
          "
                            style={{ fontFamily: '"Gill Sans", sans-serif' }}
                          >
                            <div className="text-xs sm:text-md">
                              {event.description}
                            </div>

                            <div
                              className="font-bold pt-4 text-lg"
                              style={{ fontFamily: '"Bebas Neue", sans-serif' }}
                            >
                              Location:{" "}
                              <span className="font-bold">
                                {event.location}
                              </span>
                              <br />
                              Time:{" "}
                              <span className="font-bold">{event.timings}</span>
                            </div>
                            <br />
                            {event.poc1}
                            <br />
                            {event.poc2}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
