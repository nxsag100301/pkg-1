import React from 'react'
import Card from './Card'

function News() {
  return (
    <div className='absolute top-[3927px] h-[722px] w-full bg-outstanding flex flex-col gap-14 px-20 py-[72px]'>
      <div className='uppercase font-bold text-[36px] leading-[44px]'>
        Tin tức
      </div>
      <div className='flex flex-row gap-9 justify-between'>
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

export default News
