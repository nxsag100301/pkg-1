function Partners() {
  return (
    <div
      id='partners'
      className='h-[620px] sm:h-[455px] md:h-[345px] lg:-h-[335px] w-full bg-dark-brown2'
    >
      <img
        src='/assets/bg1.jpg'
        className='absolute w-full h-[620px] sm:h-[455px] md:h-[345px] lg:-h-[335px] opacity-20 object-cover select-none'
      />
      <div className='py-14 flex flex-col gap-[58px] w-full h-full items-center z-10'>
        <div className='font-bold text-[25px] md:text-[36px] leading-[44px] text-white uppercase z-10'>
          Đối tác tin cậy
        </div>
        <div className='h-[80px] flex flex-wrap justify-center items-center gap-[10px] z-10'>
          <img
            src='/assets/partners/Frame 58.png'
            className='px-3 transition-transform duration-300 hover:scale-110'
          />
          <img
            src='/assets/partners/Frame 59.png'
            className='px-3 transition-transform duration-300 hover:scale-110'
          />
          <img
            src='/assets/partners/image 4.png'
            className='px-3 transition-transform duration-300 hover:scale-110'
          />
          <img
            src='/assets/partners/image 5.png'
            className='px-3 transition-transform duration-300 hover:scale-110'
          />
          <img
            src='/assets/partners/image 6.png'
            className='px-3 transition-transform duration-300 hover:scale-110'
          />
          <img
            src='/assets/partners/image 7.png'
            className='px-3 transition-transform duration-300 hover:scale-110'
          />
          <img
            src='/assets/partners/image 8.png'
            className='px-3 transition-transform duration-300 hover:scale-110'
          />
          <img
            src='/assets/partners/image 9.png'
            className='px-3 transition-transform duration-300 hover:scale-110'
          />
          <img
            src='/assets/partners/image 10.png'
            className='px-3 transition-transform duration-300 hover:scale-110'
          />
        </div>
      </div>
    </div>
  )
}

export default Partners
