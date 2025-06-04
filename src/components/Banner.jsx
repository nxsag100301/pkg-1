import React from 'react'

function Banner() {
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
      <img src='/assets/Frame73.png' alt='Frame73' />
    </div>
  )
}

export default Banner
