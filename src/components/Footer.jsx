import { useCallback } from 'react'

function Footer() {
  const scollToSection = useCallback((sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }, [])
  return (
    <div className='h-[498px] px-20 py-12 flex flex-col gap-[72px] bg-midnight-100'>
      <div className='w-[1280px] h-[302px] flex flex-row gap-[126px] items-center'>
        <div className='w-[526px] h-[284px] flex flex-col gap-6 justify-center items-center'>
          <img
            src='/assets/logophuckhang.png'
            alt='logo phuc khang'
            className='w-[262px] h-[164px]'
          />
          <div className='font-medium h-[96px] text-[20px] leading-8 text-white'>
            ĐÁ PHONG THỦY PHÚC KHANG là sự kết hợp giữa ĐÁ và PHONG THỦY mong
            mang đến cho người sở hữu luôn có sức khỏe, phúc lộc và nhiều may
            mắn trong cuộc đời.
          </div>
        </div>
        <div className='w-[628px] h-[302px] flex flex-row justify-between gap-[79px]'>
          <div className='flex flex-col gap-6 w-[252px] h-[302px] '>
            <div className='font-medium text-[20px] leading-8 text-white'>
              Khảo sát
            </div>
            <div className='font-normal text-[16px] text-gray-50 tracking-[0.15px] '>
              Sự thật và nhiều cơ hội lớn mở ra, đi cùng là muôn vàn thử thách.
              Khảo sát đã được các chuyên gia lựa chọn cho các vấn đề của bạn và
              cùng Phúc Khang Gems giải quyết ngay!
            </div>
            <div
              className='button font-medium bg-white w-[216px] h-[54px] px-6 py-4 text-[20px] leading-8'
              onClick={() => scollToSection('booking')}
            >
              Tham gia miễn phí
            </div>
          </div>
          <div className='w-[308px] h-[168px] flex flex-col gap-6'>
            <div className='font-medium text-[20px] leading-8 text-white'>
              Liên hệ
            </div>
            <div className='w-[292px] h-[112px] text-[16px] text-gray-50 leading-7 tracking-[0.15px]'>
              Hotline:{' '}
              <span className='font-semibold text-yellow-1'>0938178938</span> |{' '}
              <span className='font-semibold text-yellow-1'>0939619111</span>{' '}
              Email:{' '}
              <span className='font-semibold text-yellow-1'>
                phuckhanggem@gmail.com
              </span>{' '}
              Địa chỉ: D2 Đường 5B HimLam P. Tân Hưng, Quận 7, TP. Hồ Chí Minh
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
