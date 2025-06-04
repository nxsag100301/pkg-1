import { FaArrowRight } from 'react-icons/fa6'

export default function Hero() {
  return (
    <div className='h-[700px] xl:h-[934px] bg-dark-brown relative top-[90px] select-none'>
      <img
        src='/assets/bg1.jpg'
        className='absolute inset-0 w-full h-full object-cover object-right-bottom opacity-40 mix-blend-overlay'
      />
      <div
        className='absolute font-harmony top-[66px] lg:top-[46px] left-8 sm:left-10 md:left-[100px] lg:left-[214px]
     text-white lg:w-[414px] font-normal text-[100px] md:text-[120px] lg:text-[200px] 
      leading-[56px] lg:leading-[156px] tracking-[0px] text-center z-10'
      >
        Phạm Ngọc
      </div>
      <div
        className='absolute font-extrabold text-[45px] sm:text-[75px] lg:text-[120px] xl:text-[160px] 
      leading-[180px] h-[168px] top-[60px] sm:top-[70px] lg:top-[150px] left-8 md:left-[130px] lg:left-[93px] xl:left-[193px] 
      uppercase bg-banner-gradient bg-clip-text text-transparent z-0'
      >
        Thiên Trang
      </div>
      <div
        className='absolute top-[230px] sm:top-[258px] lg:top-[358px] left-10 md:left-20 lg:left-[119px] xl:left-[189px] w-[150px] lg:w-[426px]
       h-[192px] flex flex-col gap-12 z-10'
      >
        <div className='leading-[35px] md:leading-[40px] font-medium text-[18px] md:text-[24px] text-white'>
          Kết nối năng lượng <br /> Khai phá tiềm năng trong mỗi cá nhân
        </div>
        <div className='button text-primary hover:text-white text-[20px] leading-[32px] gap-2 font-medium font-jakarta bg-white hover:bg-primary py-2 h-[64px] w-[210px]'>
          Xem thêm <FaArrowRight className='relative text-[17px] top-[2px]' />
        </div>
      </div>
      <img
        src='/assets/thientrang.png'
        alt='Thien Trang'
        className='absolute hidden sm:block bottom-0 left-[200px] sm:left-[150px] md:left-[250px] 
        lg:left-[470px] xl:left-[628px] sm:h-[460px] xl:h-[697px] object-cover z-10'
      />
      <div className='absolute bottom-0 w-full z-10'>
        <img
          src='/assets/vectorfull.png'
          alt='vector'
          className='w-full h-full'
        />
      </div>
      {/* <div className='absolute top-[660px] sm:top-[640px] md:top-[620px] lg:top-[614px] xl:top-[814px] w-full z-10'>
        <img
          src='/assets/Vector86.png'
          alt='vector'
          className='w-full h-full'
        />
      </div> */}
      {/* <div className='absolute top-[630px] sm:top-[610px] md:top-[590px] lg:top-[584px] xl:top-[854px] w-full h-[179px] z-20'>
        <img
          src='/assets/Vector84.png'
          alt='vector3'
          className='w-full h-full'
        />
      </div> */}
      {/* 
      <div className='absolute top-[938px] left-[-1591px] w-[1495px] h-[174px] -z-10'>
        <img
          src='/assets/Vector89.png'
          alt='vector2'
          className='w-full h-full'
        />
      </div> */}
      {/* <div className='absolute top-[352px] w-full h-[672px] opacity-80'>
        <img
          src='/assets/Rectangle1.png'
          alt='recangle'
          className='w-full h-full'
        />
      </div> */}
    </div>
  )
}
