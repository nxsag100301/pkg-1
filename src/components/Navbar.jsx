export default function Navbar() {
  return (
    <div className='h-[90px] w-full flex flex-row items-center justify-between bg-primary py-6 px-20'>
      <div className='w-[872px] h-[70px] flex flex-row gap-[72px] items-center'>
        <img
          src='/assets/logophuckhang.png'
          alt='Logo Phuc Khang'
          className='w-[112px] h-[70px] cursor-pointer'
        />
        <span className='text-white cursor-pointer'>Nổi bật</span>
        <span className='text-white cursor-pointer'>Khách hàng</span>
        <span className='text-white cursor-pointer'>Đặt hẹn</span>
        <span className='text-white cursor-pointer'>Tin tức</span>
        <span className='text-white cursor-pointer'>Hỏi và Trả lời</span>
      </div>
      <div className='button text-primary text-[20px] leading-[32px] font-medium font-jakarta bg-white h-[52px] w-40'>
        Đặt lịch
      </div>
    </div>
  )
}
