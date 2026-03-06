import Timeline from "../components/Timeline";
import BeAPart from "../components/BeAPart";
import Carousel from "../components/Carousel";
export default function Home() {
  return (
    <div className="w-full bg-[#1a1a1a] min-h-screen text-white">
      {/* Hero Section */}
      <section className="w-full relative flex flex-col items-center justify-center bg-no-repeat bg-cover min-h-[50vh] overflow-hidden">
        <div className="absolute w-[120%] md:w-[115%] h-[140%] md:h-[100%]">
          <img
            src="/Images/gallery-bg.png"
            alt="hero-bg"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Logo and Text Container */}
        <div className="relative flex justify-center z-10 min-h-[2vh] md:min-h-[40vh] w-full">
          <img
            src={`${process.env.PUBLIC_URL}/Images/Aspire2026logo.png`}
            alt="Aspire 2026 Logo"
            className="object-contain w-[30vh] md:w-[40vh] lg:w-[60vh]"
          />
          {/* Text */}
          <div
            className=" flex justify-center whitespace-nowrap"
            style={{
              fontFamily: '"Bebas Neue", sans-serif',
              height: "31px",
              fontWeight: 400,
              fontSize: "24px",
              lineHeight: "32px",
              textAlign: "center",
              letterSpacing: "0px",
            }}
          ></div>
        </div>
      </section>

      {/* Section 2: Innovate, Create, Connect */}
      <section className="w-full mx-auto flex flex-col">
        {/* Container for the 3 rows - removing gaps and enforcing full width to match design */}
        <div className="w-full flex flex-col">
          {/* 1. INNOVATE Row */}
          <div
            className="flex flex-row w-full overflow-hidden"
            style={{ height: "250px" }}
          >
            {/* Text Block */}
            <div
              className="flex items-center justify-center shrink-0"
              style={{
                backgroundColor: "#212121",
                width: "44.5%",
                height: "100%",
              }}
            >
              <h2
                style={{
                  fontFamily: '"Bebas Neue", sans-serif',
                  color: "#FFD700",
                  fontWeight: 400,
                  fontSize: "clamp(40px, 12vw, 180px)",
                  lineHeight: "1",
                  textAlign: "center",
                  margin: 0,
                  letterSpacing: "2px",
                  width: "100%",
                  height: "100%",
                  opacity: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                INNOVATE
              </h2>
            </div>
            {/* Image Block */}
            <div className="flex-1 overflow-hidden w-full">
              <Carousel
                objects={[
                  { img: "/Images/Innovative.jpg" },
                  { img: "/Images/Left-Create.jpg" },
                  { img: "/Images/Right-Create.jpg" },
                  { img: "/Images/Connect.jpg" },
                ]}
              />
            </div>
          </div>

          {/* 2. CREATE Row */}
          <div
            className="flex flex-row w-full overflow-hidden"
            style={{ height: "250px" }}
          >
            {/* Left Image Block */}
            <div className="h-full" style={{ width: "27.8%" }}>
              <Carousel
                objects={[
                  { img: "/Images/Left-Create.jpg" },
                  { img: "/Images/Right-Create.jpg" },
                  { img: "/Images/Connect.jpg" },
                  { img: "/Images/Innovative.jpg" },
                ]}
              />
            </div>
            {/* Text Block */}
            <div
              className="flex items-center justify-center shrink-0"
              style={{
                backgroundColor: "#FFD700",
                width: "44.4%",
                height: "100%",
              }}
            >
              <h2
                style={{
                  fontFamily: '"Bebas Neue", sans-serif',
                  color: "#212121",
                  fontWeight: 400,
                  fontSize: "clamp(40px, 12vw, 180px)",
                  lineHeight: "1",
                  textAlign: "center",
                  margin: 0,
                  letterSpacing: "2px",
                  width: "100%",
                  height: "100%",
                  opacity: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                CREATE
              </h2>
            </div>
            {/* Right Image Block */}
            <div className="flex-1 h-full">
              <Carousel
                objects={[
                  { img: "/Images/Right-Create.jpg" },
                  { img: "/Images/Connect.jpg" },
                  { img: "/Images/Innovative.jpg" },
                  { img: "/Images/Left-Create.jpg" },
                ]}
              />
            </div>
          </div>

          {/* 3. CONNECT Row */}
          <div
            className="flex flex-row w-full overflow-hidden"
            style={{ height: "250px" }}
          >
            {/* Image Block */}
            <div className="flex-1 h-full">
              <Carousel
                objects={[
                  { img: "/Images/Connect.jpg" },
                  { img: "/Images/Innovative.jpg" },
                  { img: "/Images/Left-Create.jpg" },
                  { img: "/Images/Right-Create.jpg" },
                ]}
              />
            </div>
            {/* Text Block */}
            <div
              className="flex items-center justify-center shrink-0"
              style={{
                backgroundColor: "#212121",
                width: "44.5%",
                height: "100%",
              }}
            >
              <h2
                style={{
                  fontFamily: '"Bebas Neue", sans-serif',
                  color: "#FFD700",
                  fontWeight: 400,
                  fontSize: "clamp(40px, 12vw, 180px)",
                  lineHeight: "1",
                  textAlign: "center",
                  margin: 0,
                  letterSpacing: "2px",
                  width: "100%",
                  height: "100%",
                  opacity: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                CONNECT
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <Timeline />

      {/* Be A Part Section */}
      <BeAPart />
    </div>
  );
}
