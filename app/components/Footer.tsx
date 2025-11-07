'use client'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp
} from 'react-icons/fa'

export default function Footer () {
  const handleWhatsappClick = () => {
    const phoneNumber = '919482292440'
    const message =
      'ನಮ್ಮ ಭಜನಾ ಮಂಡಳಿಯ ಕುರಿತು ಇನ್ನಷ್ಟು ಮಾಹಿತಿಯನ್ನು ತಿಳಿಯಲು ಭಯಸುತ್ತೀರಾ. 🙏   - ಮುಡ್ರಾಲು ಭಜನಾ ಮಂಡಳಿ'
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`
    window.open(url, '_blank')
  }
  return (
    <footer className='bg-[#fff8f3] shadow-inner px-6 sm:px-12 py-8 rounded-t-2xl text-gray-700'>
      {/* Main grid */}
      <div className='gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
        {/* Section 1 */}
        <div>
          <h1 className='font-bold text-orange-500 text-xl sm:text-2xl'>
            ಭಕ್ತಿ ಗೀತೆಗಳು
          </h1>
          <p className='mt-2 font-semibold text-gray-500 text-sm sm:text-base'>
            ಕನ್ನಡ ಭಕ್ತಿ ಗೀತೆಗಳ ಸಂಗ್ರಹ
          </p>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className='mb-3 font-semibold text-gray-700 text-lg'>
            ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮ
          </h2>
          <div className='flex space-x-3'>
            <div className='hover:bg-orange-100 p-2 border border-gray-300 rounded-md transition cursor-pointer'>
              <button
                className='text-gray-700 fab fa-whatsapp'
                onClick={handleWhatsappClick}
              >
                <FaWhatsapp />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className='mt-8 pt-4 border-gray-200 border-t text-gray-500 text-sm text-center'>
        © 2025 ಭಕ್ತಿ ಗೀತೆಗಳು. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.
      </div>
    </footer>
  )
}
