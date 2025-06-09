import { FaArrowRight } from 'react-icons/fa6'

export default function Hero() {
  return (
    <div
      id='hero'
      className='h-[500px] sm:h-[684px] xl:h-[934px] bg-dark-brown relative select-none'
    >
      <img
        src='/assets/bg1.jpg'
        className='absolute inset-0 w-full h-full object-cover object-right-bottom opacity-40 mix-blend-overlay'
      />

      <div className='relative w-[320px] mx-auto h-full max-w-screen-xl sm:w-full md:mx-0 lg:mx-auto 2xl:mx-auto'>
        <div
          className='absolute font-harmony top-[66px] lg:top-[46px] left-8 sm:left-10 md:left-[100px] lg:left-[0px]
          text-white lg:w-[500px] font-normal text-[80px] md:text-[120px] lg:text-[200px] 
          leading-[56px] lg:leading-[156px] tracking-[0px] text-center z-10 lg:pl-20'
        >
          Phạm Ngọc
        </div>

        <div
          className='absolute font-extrabold text-[44px] sm:text-[75px] lg:text-[120px] xl:text-[160px] 
          leading-[180px] h-[168px] top-[60px] sm:top-[70px] lg:top-[150px] left-8 md:left-[130px] lg:left-[0px] 
          uppercase bg-banner-gradient bg-clip-text text-transparent z-0 lg:pl-20'
        >
          Thiên Trang
        </div>

        <div
          className='hidden sm:flex absolute top-[230px] sm:top-[258px] lg:top-[358px] left-10 md:left-20 lg:left-0 w-[150px] lg:w-[426px]
          h-[192px] flex-col gap-12 z-10 lg:pl-20'
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
          className='absolute bottom-0 left-0 sm:left-auto sm:right-2 md:left-[270px] md:right-auto
          lg:left-[390px] xl:left-[440px] h-[360px] sm:h-[460px] xl:h-[697px] object-cover '
        />
      </div>

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
