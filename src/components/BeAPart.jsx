import React from 'react';

export default function BeAPart() {
    return (
        <div className="w-full bg-[#FFD700] min-h-screen flex flex-col items-center justify-center p-8">
            {/* Title */}
            <h1
                className="text-[#212121] font-bold tracking-wider mb-16 uppercase text-center"
                style={{
                    fontFamily: '"Bebas Neue", sans-serif',
                    fontWeight: 400,
                    fontSize: '96px',
                    lineHeight: '40px',
                    letterSpacing: '0px',
                    width: '861px',
                    height: '156px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                BE A PART
            </h1>

            {/* Container for two sections */}
            <div className="w-full flex items-flex-start justify-center gap-24" style={{ alignItems: 'flex-start' }}>
                {/* STALLS Section */}
                <div
                    className="flex flex-col items-center justify-start"
                    style={{
                        width: '431px',
                        opacity: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        gap: '20px'
                    }}
                >
                    {/* Label */}
                    <div className="bg-[#FFD700] flex items-center justify-center">
                        <h2
                            className="text-[#212121] font-bold uppercase text-center"
                            style={{
                                fontFamily: '"Bebas Neue", sans-serif',
                                fontWeight: 400,
                                fontSize: '64px',
                                lineHeight: '32px',
                                letterSpacing: '0px',
                                width: '411px',
                                height: '77px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            STALLS
                        </h2>
                    </div>

                    {/* Image Container */}
                    <div className="rounded-lg overflow-hidden" style={{ width: '100%', maxWidth: '431px', height: 'auto' }}>
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets%2Fb3bf9872c14a45ac84b597bda486fc45%2Ff7828e3a49e841ccb536be61f911971e?format=webp&width=800&height=1200"
                            alt="Stalls"
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    {/* Button */}
                    <button
                        className="bg-[#212121] text-[#FFD700] px-8 py-3 rounded-full font-bold uppercase tracking-wide transition-all duration-300 hover:bg-[#1a1a1a] mt-4"
                        style={{ fontFamily: '"Bebas Neue", sans-serif', fontWeight: 400 }}
                    >
                        REGISTER
                    </button>
                </div>

                {/* PARTICIPATE Section */}
                <div
                    className="flex flex-col items-center justify-start"
                    style={{
                        width: '432px',
                        opacity: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: '20px'
                    }}
                >
                    {/* Label */}
                    <div className="bg-[#FFD700] flex items-center justify-center">
                        <h2
                            className="text-[#212121] font-bold uppercase text-center"
                            style={{
                                fontFamily: '"Bebas Neue", sans-serif',
                                fontWeight: 400,
                                fontSize: '64px',
                                lineHeight: '32px',
                                letterSpacing: '0px',
                                width: '431px',
                                height: '78px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            PARTICIPATE
                        </h2>
                    </div>

                    {/* Image Container */}
                    <div className="rounded-lg overflow-hidden" style={{ width: '100%', maxWidth: '432px', height: 'auto' }}>
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets%2Fb3bf9872c14a45ac84b597bda486fc45%2Fc3eef68f2ef74308a7c82a95540264fd?format=webp&width=800&height=1200"
                            alt="Participate"
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    {/* Button */}
                    <button
                        className="bg-[#212121] text-[#FFD700] px-8 py-3 rounded-full font-bold uppercase tracking-wide transition-all duration-300 hover:bg-[#1a1a1a] mt-4"
                        style={{ fontFamily: '"Bebas Neue", sans-serif', fontWeight: 400 }}
                    >
                        REGISTER
                    </button>
                </div>
            </div>
        </div>
    );
}
