import { useEffect, useState } from 'react'

function Banner() {
  const [trustedCustomer, setTrustedCusomer] = useState()
  useEffect(() => {
    const random = Math.floor(Math.random() * 1000)
    setTrustedCusomer(random + 1000)
  }, [])
  return (
    <div className='flex flex-col items-center relative mx-auto bg-dark-brown2'>
      <img
        src='/assets/Frame 36429.png'
        alt='Vong pt'
        className='w-full h-full object-cover z-10'
      />
      <img
        src='/assets/Group1.png'
        alt='Group1'
        className='absolute top-[80px] xl:top-[249px] object-cover z-10'
      />
      <div className='flex flex-col justify-center'>
        <div className='flex flex-col lg:flex-row gap-20 justify-between items-center'>
          <div className='relative flex justify-center lg:justify-start max-w-[560px] max-h-[698ppx]'>
            <img
              src='/assets/Photo.png'
              alt='Trang ao do'
              className='object-cover w-full h-full mr-12 lg:mr-0'
            />
            <div className='absolute bottom-0 right-0 md:right-[-100px]'>
              <div className='relative w-[144px] h-[144px] sm:w-[244px] sm:h-[244px]'>
                <img
                  src='/assets/circle.png'
                  alt='circle'
                  className='object-cover w-full h-full'
                />
                <div className='absolute inset-0 flex items-center justify-center'>
                  <p className='text-primary-100 text-[10px] leading-3  sm:text-[18px] sm:leading-8 font-medium text-center'>
                    <span className='text-primary-100 block text-[16px] leading-5 sm:text-[48px] sm:leading-[56px] font-bold'>
                      {trustedCustomer} +
                    </span>
                    Khách hàng tin tưởng
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='px-10 lg:pr-10 pb-10 sm:pb-20 flex items-center lg:items-end'>
            <img src='/assets/Frame 71.png' alt='Frame 71' className='' />
          </div>
        </div>
        <img src='/assets/Frame11.png' alt='Frame 11' className='z-10 py-9' />
      </div>
    </div>
  )
}

export default Banner
