import Card from './Card'

function NewsSections() {
  return (
    <div
      id='news-section'
      className='flex flex-col gap-[50px] md:gap-[72px] bg-outstanding h-auto pt-[96px] 
      px-[80px] pb-[80px]'
    >
      <div className='flex justify-center md:justify-start uppercase font-bold text-[20px] md:text-[36px] leading-[44px]'>
        Tin tức
      </div>
      <div className='flex flex-col justify-center items-center md:flex-row md:justify-between gap-9'>
        <Card
          image='/assets/card-image.png'
          title='Thông minh cực rẻ - Kỉ luật mới đắt giá'
          date='06/02/2025'
          url='chua co'
        />
        <Card
          image='/assets/card-image.png'
          title='Phúc Khang Gems và hành trình gieo duyên đến tương lai'
          date='06/02/2025'
          url='chua co'
        />
        <Card
          image='/assets/card-image.png'
          title='Phạm Ngọc Thiên Trang - đưa ứng dụng phong thuỷ vào cuộc sống'
          date='06/02/2025'
          url='chua co'
        />
      </div>
    </div>
  )
}

export default NewsSections
