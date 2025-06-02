import React from 'react'

function Card({ image, title, description, url }) {
  return (
    <div
      className='border-t border-l border-r border-border-card h-[465px] w-[392px] rounded-tl-[12px] 
        rounded-tr-[12px] flex flex-col gap-9 pb-4'
    >
      <img
        src={image}
        alt='Card image'
        className='w-full h-[253px] object-contain '
      />
      <div className='flex flex-col gap-4 w-[321px] h-[160px] ml-9'>
        <div className='flex flex-col gap-2'>
          <div className='font-medium text-[20px] leading-8'>{title}</div>
          <div className='font-normal text-[16px] leading-[28px] text-gray-90'>
            {description}
          </div>
        </div>
        <div className='flex gap-1 justify-end text-primary cursor-pointer'>
          Xem chi tiết &#8594;
        </div>
      </div>
    </div>
  )
}

export default Card
