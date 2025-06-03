import { useNavigate } from 'react-router-dom'

function Card({ image, title, description, url, date }) {
  const navigate = useNavigate()
  return (
    <div
      className='border border-border-card h-[355px] w-[242px] md:h-[465px] md:w-[392px] rounded-tl-[12px] 
        rounded-tr-[12px] flex flex-col gap-5 md:gap-9 pb-4 transition-transform duration-300 hover:scale-105'
    >
      <img
        src={image}
        alt='Card image'
        className='w-full h-[253px] object-contain '
      />
      <div className='flex flex-col gap-4 h-[160px] px-4'>
        <div className='flex flex-col gap-1 md:gap-2'>
          <div className='font-medium text-[15px] md:text-[20px] leading-8'>
            {title}
          </div>
          {description ? (
            <div className='font-normal text-[13px] md:text-[16px] leading-[28px] text-gray-90'>
              {description}
            </div>
          ) : (
            <div className='font-normal text-[13px] md:text-[16px] leading-[28px] text-gray-90'>
              &#x25CF; {date}
            </div>
          )}
        </div>
        <div
          className='flex gap-1 justify-end text-primary cursor-pointer text-[12px] md:text-[14px]'
          onClick={() => navigate(url)}
        >
          Xem chi tiết &#8594;
        </div>
      </div>
    </div>
  )
}

export default Card
