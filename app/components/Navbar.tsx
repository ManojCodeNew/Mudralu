'use client'
// import { useState } from 'react'
// import { FiSearch } from 'react-icons/fi'

export default function Navbar () {

  // const [smallScreen, setSmallScreen] = useState(false)
  return (
    <nav className='flex justify-between items-center bg-[#FAF9F7] shadow-[0_4px_20px_rgba(0,0,0,0.05)] mb-3 px-4 py-3 rounded-b-3xl w-full text-gray-800'>
      {/* Left Logo */}
      <h1
        className='px-3 py-2 font-bold text-orange-500 text-lg sm:text-xl md:text-2xl cursor-pointer'
        onClick={() => (window.location.href = '/')}
      >
        ಭಕ್ತಿ ಗೀತೆಗಳು
      </h1>

      {/* Search Bar */}
      {/* <div
        className={`${
          smallScreen
            ? 'max-h-20 mt-3 sm:mt-0'
            : 'max-h-0 sm:max-h-none sm:mt-0'
        } overflow-hidden sm:overflow-visible 
           transition-all duration-300 ease-in-out 
           flex items-center justify-center 
           w-[90%] sm:w-[70%] md:w-[45%]`}
      >
        <FiSearch className='ml-3 text-gray-500' />
        <input
          type='text'
          placeholder='ಹಾಡನ್ನು ಹುಡುಕಿ...'
          className='flex-1 bg-transparent px-2 sm:px-3 py-2 rounded-full focus:outline-none text-gray-700 text-sm sm:text-base placeholder-gray-500'
        />
      </div>
 */}
      {/* Right Icons */}
      {/* <div className='flex items-center gap-2'>
        <FiSearch
          className='sm:hidden w-5 h-5 hover:text-orange-500 transition-colors cursor-pointer'
          onClick={() => {
            if (smallScreen === false) {
              setSmallScreen(true)
            } else {
              setSmallScreen(false)
            }
          }}
        /> */}

        {/* <div
          className='flex justify-center bg-orange-100 p-1 border-2 border-gray-200 rounded-full w-8 h-8'
          onClick={handleProfile}
        >
          M
        </div> */}
      {/* </div> */}
    </nav>
  )
}
