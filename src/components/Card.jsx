import { useNavigate } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

function Card({ image, title, description, url, date }) {
  const navigate = useNavigate()
  return (
    <div
      className='border border-border-card w-full md:w-full lg:w-[80%] 2xl:w-[392px]  rounded-xl
         flex flex-col gap-5 lg:gap-9 pb-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer'
      onClick={() => navigate(`/${url}`)}
    >
      <img
        src={image}
        alt='Card image'
        className='w-full h-[253px] object-cover md:object-[center_10%] md:h-[300px] lg:h-[253px] rounded-t-xl'
      />
      <div className='flex flex-col gap-4 px-4'>
        <div className='flex flex-col gap-1 md:gap-2'>
          <div className='font-medium text-[15px] md:text-[20px] leading-8 line-clamp-2'>
            {title}
          </div>
          {description ? (
            <div className='font-normal text-[13px] md:text-[16px] leading-[28px] text-gray-90 line-clamp-2'>
              {description}
            </div>
          ) : (
            <div className='font-normal text-[13px] md:text-[16px] leading-[28px] text-gray-90'>
              &#x25CF; {date}
            </div>
          )}
        </div>
        <div
          className='flex gap- font-medium gap-1 justify-end text-primary items-center cursor-pointer text-[12px] md:text-[14px]'
          onClick={() => navigate(`/${url}`)}
        >
          Xem chi tiết <FaArrowRight className='text-[14px]' />
        </div>
      </div>
    </div>
  )
}

export default Card
