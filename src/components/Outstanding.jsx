import React from 'react'
import Card from './Card'

export default function Outstanding() {
  return (
    <div className='relative flex flex-col gap-[72px] bg-outstanding min-h-[793px] max-h-[793px] pt-[96px] px-[80px] pb-[80px] z-20'>
      <div className='flex justify-center uppercase font-bold text-[36px] leading-[44px]'>
        Nổi bật
      </div>
      <div className='flex flex-row justify-between h-[465px] w-[1280px] gap-9'>
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
