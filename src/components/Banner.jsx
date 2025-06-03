import React from 'react'

function Banner() {
  return (
    <div className='flex flex-col items-center relative max-w-[1440px] mx-auto'>
      <img
        src='/assets/vongpt2-1.png'
        alt='Vong pt'
        className='z-10 mix-blend-hard-light object-cover'
      />
      <img
        src='/assets/Group1.png'
        alt='Group1'
        className='absolute top-[80px] xl:top-[249px] object-cover z-10'
      />
      {/* <img
        src='/assets/Rectangle15.png'
        alt='Rectangle15'
        className='absolute'
      />
      <img
        src='/assets/Rectangle 14.png'
        alt='Rectangle14'
        className='absolute right-0'
      />
      <img
        src='/assets/Rectangle9.png'
        alt='Rectangle9'
        className='absolute bottom-[830px]'
      />
      <img
        src='/assets/Rectangle13.png'
        alt='Rectangle13'
        className='absolute left-0'
      /> */}
      <img src='/assets/Frame73.png' alt='Frame73' />
    </div>
  )
}

export default Banner
