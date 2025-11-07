'use client'
import ImageSlider from './components/ImageSlider'
import Link from 'next/link'
export default function Home () {
  const handlePravesha = () => {
    // Handle Pravesha button click (e.g., navigate to another page)
    console.log('Pravesha clicked')
  }

  return (
    <main className='bg-gradient-to-b from-orange-50 to-white min-h-screen'>
      <ImageSlider />
      <div className='mx-auto px-4 py-8 container'>
        <h1 className='mb-6 font-bold text-2xl sm:text-3xl text-center'>
          ಮುಡ್ರಾಲು ದೇವಸ್ಥಾನ
        </h1>
        <p className='text-gray-600 text-sm sm:text-base text-center'>
          Welcome to Mudralu Temple - A place of devotion and spirituality
        </p>
        <div>
          <button></button>
        </div>

        <div className='flex flex-col justify-center items-center px-4 py-8 sm:py-12 text-center'>
          <h1 className='mb-4 font-bold text-orange-600 text-3xl sm:text-4xl md:text-5xl'>
            ಭಕ್ತಿ ಗೀತೆಗಳು
          </h1>
          <p className='px-4 max-w-2xl text-gray-700 text-base sm:text-lg leading-relaxed'>
            ಆಧ್ಯಾತ್ಮಿಕ ಜೀವನದ ಮಾರ್ಗದಲ್ಲಿ ಭಕ್ತಿ ಗಾನಗಳು ನಮ್ಮ ಮನಸ್ಸಿಗೆ ಶಾಂತಿಯನ್ನು
            ನೀಡುವ ಶ್ರೇಷ್ಠ ಮಾರ್ಗವಾಗಿದೆ.
            <br />
            ದೇವರ ನಾಮಸ್ಮರಣೆ, ಪ್ರೀತಿ, ದಯೆ ಮತ್ತು ಶ್ರದ್ಧೆಯ ಮೂಲಕ ಭಕ್ತಿ ಗಾನಗಳು
            ಆತ್ಮವನ್ನು ಶುದ್ಧಗೊಳಿಸುತ್ತವೆ.
            <br />
            ಪ್ರತಿಯೊಂದು ಗೀತೆ ಭಕ್ತಿಯ ಅರ್ಥವನ್ನು ಹೊಸ ರೀತಿಯಲ್ಲಿ ಅನಾವರಣಗೊಳಿಸುತ್ತದೆ.
          </p>

          <Link
            href='/Bhaktigeethe'
            className='bg-orange-500 hover:bg-orange-600 shadow-md hover:shadow-lg mt-6 sm:mt-8 px-6 py-3 rounded-full font-bold text-white text-lg transition-all cursor-pointer'
          >
            ಪ್ರವೇಶ
          </Link>
        </div>
      </div>
    </main>
  )
}
