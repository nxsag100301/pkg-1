import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()
  const scollToSection = useCallback((sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }, [])
  return (
    <div className='h-[90px] w-full flex flex-row items-center justify-between bg-primary py-6 px-6 sm:px-20'>
      <div className='w-full h-[70px] flex flex-row gap-[72px] items-center'>
        <img
          src='/assets/logophuckhang.png'
          alt='Logo Phuc Khang'
          className='w-[112px] h-[70px] cursor-pointer'
          onClick={() => navigate('/')}
        />
        <div className='hidden lg:flex flex-row gap-[72px] items-center'>
          <span
            className='text-white cursor-pointer'
            onClick={() => scollToSection('outstanding')}
          >
            Nổi bật
          </span>
          <span
            className='text-white cursor-pointer'
            onClick={() => scollToSection('partners')}
          >
            Khách hàng
          </span>
          <span
            className='text-white cursor-pointer'
            onClick={() => scollToSection('booking')}
          >
            Đặt hẹn
          </span>
          <span
            className='text-white cursor-pointer'
            onClick={() => navigate('/news')}
          >
            Tin tức
          </span>
          <span
            className='text-white cursor-pointer'
            onClick={() => navigate('/question')}
          >
            Hỏi và Trả lời
          </span>
        </div>
      </div>
      <div
        className='button text-primary text-[20px] leading-[32px] font-medium font-jakarta bg-white h-[52px] w-40'
        onClick={() => scollToSection('booking')}
      >
        Đặt lịch
      </div>
    </div>
  )
}
