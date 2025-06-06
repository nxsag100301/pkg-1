import { useCallback, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Footer() {
  const location = useLocation()
  const navigate = useNavigate()
  const scrollToSection = useCallback((sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }, [])
  const goToBookingSection = () => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: 'booking' } })
    } else {
      scrollToSection('booking')
    }
  }
  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      scrollToSection(location.state.scrollTo)
    }
  }, [location, scrollToSection])
  return (
    <div className='px-20 py-12 w-full flex flex-col gap-[72px] bg-midnight-100'>
      <div className='flex flex-col lg:flex-row gap-[72px] lg:gap-[126px] lg:items-center justify-center'>
        <div className='flex flex-col gap-10 md:gap-6 justify-center items-center'>
          <img
            src='/assets/logophuckhang.png'
            alt='logo phuc khang'
            className='max-w-[262px] max-h-[164px]'
          />
          <div className='font-base text-[20px] leading-8 text-white text-center md:text-justify  '>
            ĐÁ PHONG THỦY PHÚC KHANG là sự kết hợp giữa ĐÁ và PHONG THỦY mong
            mang đến cho người sở hữu luôn có sức khỏe, phúc lộc và nhiều may
            mắn trong cuộc đời.
          </div>
        </div>
        <div className=' flex flex-col md:flex-row justify-between gap-12 md:gap-[79px]'>
          <div className='flex flex-col gap-6 items-center md:items-start'>
            <div className='font-medium text-[20px] leading-8 text-white'>
              Khảo sát
            </div>
            <div className='font-normal text-[16px] leading-7 text-gray-50 tracking-[0.15px] text-justify'>
              Sự thật và nhiều cơ hội lớn mở ra, đi cùng là muôn vàn thử thách.
              Khảo sát đã được các chuyên gia lựa chọn cho các vấn đề của bạn và
              cùng Phúc Khang Gems giải quyết ngay!
            </div>
            <a
              href='https://dangky.phuckhanggem.com/y2025/'
              target='_blank'
              className='button font-medium bg-white w-[216px] h-[54px] px-6 py-4 text-[20px] leading-8'
            >
              Tham gia miễn phí
            </a>
          </div>
          <div className='flex flex-col gap-6 items-center md:items-start'>
            <div className='font-medium text-[20px] leading-8 text-white'>
              Liên hệ
            </div>
            <div>
              <div className='text-[16px] text-gray-50 leading-7 tracking-[0.15px] text-justify flex gap-1'>
                Hotline:{' '}
                <a
                  href='tel:0938178938'
                  className='font-semibold text-yellow-1 cursor-pointer'
                >
                  0938178938
                </a>{' '}
                |{' '}
                <a
                  href='tel:0939619111'
                  className='font-semibold text-yellow-1 cursor-pointer'
                >
                  0939619111
                </a>{' '}
              </div>
              <div className='text-[16px] text-gray-50 leading-7 tracking-[0.15px] text-justify flex gap-1'>
                Email:{' '}
                <a
                  href='mailto:phuckhanggem@gmail.com'
                  className='font-semibold text-yellow-1 cursor-pointer'
                >
                  phuckhanggem@gmail.com
                </a>{' '}
              </div>
              <div className='text-[16px] text-gray-50 leading-7 tracking-[0.15px] text-justify'>
                Địa chỉ: D2 Đường 5B HimLam P. Tân Hưng, Quận 7, TP. Hồ Chí Minh
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-[16px] leading-7 tracking-[0.15px] text-gray-30 font-normal text-center'>
        © Copyright 2023 by PhucKhangNet. All right Reserved - Design by
        PhucKhangNet
      </div>
    </div>
  )
}

export default Footer
