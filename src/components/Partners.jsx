// src/components/Partners.jsx
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'

function Partners() {
  const partnerLogos = [
    'Frame 58.png',
    'Frame 59.png',
    'image 5.png',
    'image 6.png',
    'image 7.png',
    'image 9.png',
    'image 10.png'
  ]

  return (
    <div
      id='partners'
      className='relative h-[335px] w-full bg-dark-brown2 overflow-hidden'
    >
      <img
        src='/assets/bg1.jpg'
        alt='background'
        className='absolute w-full h-full opacity-20 object-cover select-none'
      />

      <div className='relative z-10 py-14 flex flex-col gap-[58px] w-full h-full items-center justify-center px-5'>
        <div className='font-bold text-[25px] md:text-[36px] leading-[44px] text-white uppercase pt-4'>
          Đối tác tin cậy
        </div>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={6}
          spaceBetween={10}
          loop={true}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 2 },
            420: { slidesPerView: 3 },
            640: { slidesPerView: 4 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 6 }
          }}
          className='w-full max-w-[1262px] h-[90px] flex'
        >
          {partnerLogos.map((file, index) => (
            <SwiperSlide key={index} className='flex items-center'>
              <img
                src={`/assets/partners/${file}`}
                alt={`partner-${index}`}
                className='transition-transform duration-300 hover:scale-110
                 object-contain w-full h-full'
              />
            </SwiperSlide>
          ))}
          <SwiperSlide className='mx-6'>
            <img
              src={`/assets/partners/image 8.png`}
              alt={`partner-image 8.png`}
              className='transition-transform duration-300 hover:scale-110
                 object-cover h-full'
            />
          </SwiperSlide>
          <SwiperSlide className='mx-6'>
            <img
              src={`/assets/partners/image 4.png`}
              alt={`partner-image 4.png`}
              className='transition-transform duration-300 hover:scale-110
                 object-cover h-full'
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Partners

// const partnerLogos = [
//     'Frame 58.png',
//     'Frame 59.png',
//     'image 4.png',
//     'image 5.png',
//     'image 6.png',
//     'image 7.png',
//     'image 8.png',
//     'image 9.png',
//     'image 10.png'
//   ]
