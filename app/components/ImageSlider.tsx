'use client'
import Slider from 'react-slick'
import Image from 'next/image'

const slides = [
  {
    src: '/temple-sunrise.jpg',
    title: 'ಆಧ್ಯಾತ್ಮಿಕ ಬೆಳಕು',
    subtitle: 'Spiritual Light'
  },
  {
    src: '/deity-worship.jpg',
    title: 'ಭಕ್ತಿಯ ಮಾರ್ಗ',
    subtitle: 'Path of Devotion'
  },
  {
    src: '/deepa.jpg',
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
    <div className='shadow-lg mx-auto mt-6 rounded-2xl w-full max-w-6xl overflow-hidden'>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className='relative'>
            <Image
              src={slide.src}
              alt={slide.title}
              width={1200}
              height={600}
              className='shadow-2xl w-full h-[400px] sm:h-[500px] object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent'></div>

            <div className='absolute inset-0 flex flex-col justify-end items-center bg-gradient-to-t from-black/50 to-transparent pb-6 text-center'>
              <h2 className='drop-shadow-md font-bold text-white text-3xl sm:text-4xl'>
                {slide.title}
              </h2>
              <p className='text-white/90 text-sm sm:text-base'>
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
