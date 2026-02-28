import React from 'react'

const App = () => {
  return (
    <>
      
      <nav className='bg-[#212121] w-full h-16 flex justify-between items-center px-5 md:px-20 '>
        <div className='flex items-center gap-1 max-[300px]:justify-center w-full min-[300px]:w-auto'>
          <img src="logo cropped.png" width={30} height={48} alt="logo" className='cursor-pointer transition-all duration-300  hover:opacity-80'/>
          <span className='text-xl/6 sm:text-2xl/6 text-white font-normal font-bebas tracking-normal cursor-pointer transition-all duration-300 hover:text-[#FFD700] whitespace-nowrap text-center'>ENACTUS NSUT</span>
        </div>  
        <div className='flex justify-between items-center lg:gap-5 xl:gap-15 text-[1rem]/6'>
          <div className='hidden md:gap-4 lg:flex lg:gap-5 xl:gap-15 text-white font-normal font-arimo'>
            <span className='text-white cursor-pointer transition-all duration-300 hover:text-[#FFD700]'>Home</span>
            <span className='text-white cursor-pointer transition-all duration-300 hover:text-[#FFD700]'>Events</span>
            <span className='text-white cursor-pointer transition-all duration-300 hover:text-[#FFD700]'>Schedule</span>
            <span className='text-white cursor-pointer transition-all duration-300 hover:text-[#FFD700]'>Gallery</span>
            <span className='text-white cursor-pointer transition-all duration-300 hover:text-[#FFD700]'>Contact</span>
          </div>
          <div className='flex'>
            <button className='bg-[#FFD700] w-[85px] h-[24px] sm:w-[142px]  sm:h-[40px] rounded-full flex justify-center items-center cursor-pointer transition-all duration-300 hover:opacity-80'>
              <span className='text-[0.5rem]/6 sm:text-[1rem]/6 text-[#212121] font-bold font-sans  '>REGISTER</span> 
            </button>
          </div>
        </div>
      </nav>
      <div className='bg-[#FFD700] w-full h-[60px] sm:h-[75px] md:h-[90px] lg:h-[135px] flex justify-center items-center overflow-x-hidden'>
        <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl/10 font-bold font-bebas text-[#212121]'>BE A PART</h1>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center bg-[#FFD700] w-full px-4 md:px-0'>
        <div className='group flex flex-col relative justify-center items-center text-center w-full max-w-[411px]'>
          <h1 className='text-4xl md:text-6xl lg:text-[64px]/8 font-bebas text-[#212121] h-16 '>STALLS</h1>
          <img src="stall.jpg" className='w-full h-auto' alt="stall image" />
          <button className='flex invisible opacity-0 translate-y-0 group-hover:visible group-hover:opacity-100 group-hover:translate-y-[-8px] bg-[#212121] text-[#FFD700] absolute z-1 left-1/2 -translate-x-1/2 bottom-2 font-arimo font-bold w-[150px] sm:w-[206px] h-[45px] sm:h-[63px] rounded-full justify-center items-center cursor-pointer transition-all duration-300 hover:scale-105 text-sm sm:text-base'>REGISTER</button>    
        </div>
        <div className='group flex flex-col relative justify-center items-center text-center w-full max-w-[411px] mt-8 md:mt-0'>
          <h1 className='text-4xl md:text-6xl lg:text-[64px]/8 font-bebas text-[#212121] h-16 '>PARTICIPATE</h1>
          <img src="participate.jpg" className='w-full h-auto' alt="participate image" />
          <button className='hidden min-[300px]:flex invisible opacity-0 translate-y-0 group-hover:visible group-hover:opacity-100 group-hover:translate-y-[-8px] bg-[#212121] text-[#FFD700] font-arimo font-bold absolute z-1 left-1/2 -translate-x-1/2 bottom-2 w-[150px] sm:w-[206px] h-[45px] sm:h-[63px] rounded-full justify-center items-center cursor-pointer hover:scale-105 transition-all duration-300 text-sm sm:text-base'>REGISTER</button>
        </div>
      </div>
      
    </>
    
  )
}

export default App