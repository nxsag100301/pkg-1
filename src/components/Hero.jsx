import React from 'react'

export default function Hero() {
  return (
    <div className='min-h-[934px] max-h-[934px]'>
      <img
        src='/assets/bg1.jpg'
        className='absolute inset-0 w-full h-full object-cover object-right-bottom opacity-40 mix-blend-overlay -z-10 '
      />
      <div
        className='absolute font-harmony top-[136px] left-[214px]
     text-white w-[414px] h-[156px] font-normal text-[200px] 
     leading-[156px] tracking-[0px] text-center z-10'
      >
        Phạm Ngọc
      </div>
      <div className='absolute font-jakarta font-extrabold text-[160px] leading-[180px] w-[1053px] h-[168px] top-[240px] left-[193px] uppercase bg-banner-gradient bg-clip-text text-transparent z-0'>
        Thiên Trang
      </div>
      <div className='absolute top-[448px] left-[189px] w-[426px] h-[192px] flex flex-col gap-12'>
        <div className='font-jakarta leading-[40px] font-medium text-[24px] text-white'>
          Kết nối năng lượng <br /> Khai phá tiềm năng trong mỗi cá nhân
        </div>
        <div className='button text-primary text-[20px] leading-[32px] font-medium font-jakarta bg-white h-[64px] w-[210px]'>
          Xem thêm &#8594;
        </div>
      </div>
      <img
        src='/assets/thientrang.png'
        alt='Thien Trang'
        className='absolute top-[324px] left-[628px] h-[697px] w-[742px] object-cover '
      />
      <div className='absolute top-[904px] left-[-20px] w-[1188px] h-[164px]'>
        <img
          src='/assets/Vector86.png'
          alt='vector'
          className='w-full h-full'
          style={{ transform: 'rotate(-0.89deg)' }}
        />
      </div>
      <div className='absolute top-[936px] left-[-90px] w-[1622px] h-[179px]'>
        <img
          src='/assets/Vector84.png'
          alt='vector3'
          className='w-full h-full'
          style={{ transform: 'rotate(-0.1deg)' }}
        />
      </div>
      {/* <div className='absolute top-[938px] left-[-1591px] w-[1495px] h-[174px] -z-10'>
        <img
          src='/assets/Vector89.png'
          alt='vector2'
          className='w-full h-full'
          style={{ transform: 'rotate(358.44deg)' }}
        />
      </div> */}
      <div className='absolute top-[352px] left-[-61px] w-[1562px] h-[672px] opacity-80 -z-10'>
        <img
          src='/assets/Rectangle1.png'
          alt='recangle'
          className='w-full h-full'
        />
      </div>
    </div>
  )
}
