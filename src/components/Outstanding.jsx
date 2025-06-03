import React from 'react'
import Card from './Card'

export default function Outstanding() {
  return (
    <div
      id='outstanding'
      className='flex flex-col gap-[50px] md:gap-[72px] bg-outstanding h-auto pt-[96px] 
      px-[80px] pb-[80px]'
    >
      <div className='flex justify-center uppercase font-bold text-[20px] md:text-[36px] leading-[44px]'>
        Nổi bật
      </div>
      <div className='flex flex-col justify-center items-center md:flex-row md:justify-between gap-9'>
        <Card
          image='/assets/card-image.png'
          title='Sự kiện'
          description='Cập nhật và thông báo liên tục các sự kiện quan trọng của Phúc Khang
            Gems cho khách hàng'
          url='chua co'
        />
        <Card
          image='/assets/card-image.png'
          title='Sự kiện'
          description='Cập nhật và thông báo liên tục các sự kiện quan trọng của Phúc Khang
            Gems cho khách hàng'
          url='chua co'
        />
        <Card
          image='/assets/card-image.png'
          title='Sự kiện'
          description='Cập nhật và thông báo liên tục các sự kiện quan trọng của Phúc Khang
            Gems cho khách hàng'
          url='chua co'
        />
      </div>
    </div>
  )
}
