'use client'
import Slider from 'react-slick'
import Image from 'next/image'

const slides = [
  {
    src: '/sdp-mudralu-1.webp',
    title: 'ಭಕ್ತಿಯ ಮಾರ್ಗ',
    subtitle: 'Path of Devotion'
  },
  {
    src: '/sdp-mudralu.jpg',
    title: 'ಆಧ್ಯಾತ್ಮಿಕ ಬೆಳಕು',
    subtitle: 'Spiritual Light'
  },
  {
    src: '/deepa-mudralu.webp',
    title: 'ದೀಪದ ಶಕ್ತಿ',
    subtitle: 'Power of Light'
  }
]

export default function ImageSlider () {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  }

  return (
    <div className='shadow-lg mx-auto mt-6 rounded-2xl w-full max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-8'>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className='relative'>
            <div className='relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px]'>
              <Image
                src={slide.src}
                alt={slide.title}
                fill
                className='shadow-2xl rounded-2xl object-cover'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw'
                priority={index === 0}
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-2xl'></div>
              
              <div className='absolute inset-0 flex flex-col justify-end items-center p-6 sm:p-8 lg:p-12 text-center'>
                <h2 className='drop-shadow-lg font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2'>
                  {slide.title}
                </h2>
                <p className='text-white/90 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl'>
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
