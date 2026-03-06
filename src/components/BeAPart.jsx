export default function BeAPart() {
  return (
    <div
      className="w-full flex flex-col items-center justify-center"
      id="register"
    >
      {/* Title */}
      <h1 className="text-[#212121] bg-[#FFD700] w-full z-[2] font-bold tracking-wider items-center uppercase text-center text-6xl md:text-8xl py-10">
        BE A PART
      </h1>

      <div className="flex z-1">
        {/* Participate Section */}
        <div className="relative group">
          <div className="absolute bg-[#FFD700] flex-1 md:mt-[-10vh] md:group-hover:mt-[0vh] z-[1] flex items-center justify-center w-full transition-all duration-300">
            <h2 className="text-[#212121] font-bold uppercase text-center text-2xl sm:text-4xl md:text-6xl">
              PARTICIPATE
            </h2>
          </div>

          <img
            src="/Images/Participate.png"
            alt="participate"
            className="object-cover h-full w-full"
          />

          <div className="grid z-[1] mt-[-5vh] sm:mt-[-6.8vh] md:mt-[0] md:group-hover:mt-[-10vh] absolute place-items-center w-full transition-all duration-300">
            <a
              href="https://linktr.ee/aspirensut"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-[#212121] text-[#FFD700] text-md md:text-base px-4 sm:px-6 md:px-8 py-1 sm:py-3 rounded-full font-bold uppercase tracking-wide hover:bg-[#1a1a1a]">
                REGISTER
              </button>
            </a>
          </div>
        </div>

        {/* Stalls Section */}
        <div className="relative group">
          <div className="absolute bg-[#FFD700] flex-1 md:mt-[-10vh] md:group-hover:mt-[0vh] z-[1] flex items-center justify-center w-full transition-all duration-300">
            <h2 className="text-[#212121] font-bold uppercase text-center text-2xl sm:text-4xl md:text-6xl">
              STALLS
            </h2>
          </div>

          <img
            src="/Images/Stalls.png"
            alt="stalls"
            className="object-cover h-full w-full"
          />

          <div className="grid z-[1] mt-[-5vh] sm:mt-[-6.8vh] md:mt-[0] md:group-hover:mt-[-10vh] absolute place-items-center w-full transition-all duration-300">
            <a
              href="https://www.instagram.com/p/DVSk5cNk5Zp/?igsh=MWNxZW12bW9yYnFpcw=="
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-[#212121] text-[#FFD700] text-md md:text-base px-4 sm:px-6 md:px-8 py-1 sm:py-3 rounded-full font-bold uppercase tracking-wide hover:bg-[#1a1a1a]">
                REGISTER
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
