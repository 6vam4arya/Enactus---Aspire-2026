import React from 'react';
import Timeline from '../components/Timeline';
import BeAPart from '../components/BeAPart';

export default function Gallery() {
    return (
        <div className="w-full bg-[#1a1a1a] min-h-screen text-white">
            {/* Hero Section */}
            <section
                className="w-full relative flex flex-col items-center justify-center bg-center bg-no-repeat bg-cover min-h-[383px] py-16"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Images/gallery-bg.png)` }}
            >
                {/* Logo and Text Container */}
                <div className="relative z-10 w-full max-w-[860px] h-[300px] scale-75 md:scale-100 mt-8">
                    <img
                        src={`${process.env.PUBLIC_URL}/Images/Aspire2026logo.png`}
                        alt="Aspire 2026 Logo"
                        className="absolute object-contain"
                        style={{
                            width: '435px',
                            height: '268px',
                            top: '-17.99px',
                            left: '214px',
                            opacity: 1,
                            transform: 'rotate(0deg)'
                        }}
                    />
                    {/* Text */}
                    <div
                        className="absolute flex justify-center gap-[6px] top-[193.01px] left-[233px] whitespace-nowrap"
                        style={{
                            fontFamily: '"Bebas Neue", sans-serif',
                            height: '31px',
                            fontWeight: 400,
                            fontSize: '24px',
                            lineHeight: '32px',
                            textAlign: 'center',
                            letterSpacing: '0px',
                        }}
                    >
                        <span>THE ENTREPRENEURSHIP</span>
                        <span style={{ color: '#FFD700' }}>FESTIVAL</span>
                    </div>
                </div>
            </section>

            {/* Section 2: Innovate, Create, Connect */}
            <section className="w-full mx-auto flex flex-col">

                {/* Container for the 3 rows - removing gaps and enforcing full width to match design */}
                <div className="w-full flex flex-col">

                    {/* 1. INNOVATE Row */}
                    <div className="flex flex-row w-full overflow-hidden" style={{ height: '250px' }}>
                        {/* Text Block */}
                        <div
                            className="flex items-center justify-center shrink-0"
                            style={{ backgroundColor: '#212121', width: '44.5%', height: '100%' }}
                        >
                            <h2
                                style={{
                                    fontFamily: '"Bebas Neue", sans-serif',
                                    color: '#FFD700',
                                    fontWeight: 400,
                                    fontSize: 'clamp(80px, 12vw, 180px)',
                                    lineHeight: '1',
                                    textAlign: 'center',
                                    margin: 0,
                                    letterSpacing: '2px',
                                    width: '100%',
                                    height: '100%',
                                    opacity: 1,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                INNOVATE
                            </h2>
                        </div>
                        {/* Image Block */}
                        <div className="flex-1 h-full">
                            <img
                                src={`${process.env.PUBLIC_URL}/Images/Innovative.jpg`}
                                alt="Innovate"
                                className="w-full h-full object-cover object-[center_35%]"
                            />
                        </div>
                    </div>

                    {/* 2. CREATE Row */}
                    <div className="flex flex-row w-full overflow-hidden" style={{ height: '250px' }}>
                        {/* Left Image Block */}
                        <div className="h-full" style={{ width: '27.8%' }}>
                            <img
                                src={`${process.env.PUBLIC_URL}/Images/Left-Create.jpg`}
                                alt="Create Left"
                                className="w-full h-full object-cover object-[left_top]"
                            />
                        </div>
                        {/* Text Block */}
                        <div
                            className="flex items-center justify-center shrink-0"
                            style={{ backgroundColor: '#FFD700', width: '44.4%', height: '100%' }}
                        >
                            <h2
                                style={{
                                    fontFamily: '"Bebas Neue", sans-serif',
                                    color: '#212121',
                                    fontWeight: 400,
                                    fontSize: 'clamp(80px, 12vw, 180px)',
                                    lineHeight: '1',
                                    textAlign: 'center',
                                    margin: 0,
                                    letterSpacing: '2px',
                                    width: '100%',
                                    height: '100%',
                                    opacity: 1,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                CREATE
                            </h2>
                        </div>
                        {/* Right Image Block */}
                        <div className="flex-1 h-full">
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets%2Fb3bf9872c14a45ac84b597bda486fc45%2F67181eaf06bc4be780bf3d95496f05f1?format=webp&width=800&height=1200"
                                alt="Create Right"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </div>

                    {/* 3. CONNECT Row */}
                    <div className="flex flex-row w-full overflow-hidden" style={{ height: '250px' }}>
                        {/* Image Block */}
                        <div className="flex-1 h-full">
                            <img
                                src={`${process.env.PUBLIC_URL}/Images/Connect.jpg`}
                                alt="Connect"
                                className="w-full h-full object-cover object-[center_20%]"
                            />
                        </div>
                        {/* Text Block */}
                        <div
                            className="flex items-center justify-center shrink-0"
                            style={{ backgroundColor: '#212121', width: '44.5%', height: '100%' }}
                        >
                            <h2
                                style={{
                                    fontFamily: '"Bebas Neue", sans-serif',
                                    color: '#FFD700',
                                    fontWeight: 400,
                                    fontSize: 'clamp(80px, 12vw, 180px)',
                                    lineHeight: '1',
                                    textAlign: 'center',
                                    margin: 0,
                                    letterSpacing: '2px',
                                    width: '100%',
                                    height: '100%',
                                    opacity: 1,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
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
