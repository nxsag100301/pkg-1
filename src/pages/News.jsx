import Card from '../components/Card'
import { GrFormPrevious } from 'react-icons/gr'
import { GrFormNext } from 'react-icons/gr'

function News() {
  return (
    <div className='bg-outstanding flex flex-col px-20 pt-[84px] pb-[72px] gap-12 items-center'>
      <div className='flex flex-wrap gap-12 justify-center'>
        <Card
          image='/assets/card-image.png'
          title='Thông minh cực rẻ - Kỉ luật mới đắt giá'
          date='06/02/2025'
          url='chua co'
        />
        <Card
          image='/assets/card-image.png'
          title='Thông minh cực rẻ - Kỉ luật mới đắt giá'
          date='06/02/2025'
          url='chua co'
        />
        <Card
          image='/assets/card-image.png'
          title='Thông minh cực rẻ - Kỉ luật mới đắt giá'
          date='06/02/2025'
          url='chua co'
        />
        <Card
          image='/assets/card-image.png'
          title='Thông minh cực rẻ - Kỉ luật mới đắt giá'
          date='06/02/2025'
          url='chua co'
        />
        <Card
          image='/assets/card-image.png'
          title='Thông minh cực rẻ - Kỉ luật mới đắt giá'
          date='06/02/2025'
          url='chua co'
        />
        <Card
          image='/assets/card-image.png'
          title='Thông minh cực rẻ - Kỉ luật mới đắt giá'
          date='06/02/2025'
          url='chua co'
        />
        <Card
          image='/assets/card-image.png'
          title='Thông minh cực rẻ - Kỉ luật mới đắt giá'
          date='06/02/2025'
          url='chua co'
        />
        <Card
          image='/assets/card-image.png'
          title='Thông minh cực rẻ - Kỉ luật mới đắt giá'
          date='06/02/2025'
          url='chua co'
        />
        <Card
          image='/assets/card-image.png'
          title='Thông minh cực rẻ - Kỉ luật mới đắt giá'
          date='06/02/2025'
          url='chua co'
        />
      </div>
      <div className='flex items-center gap-[18px] text-[18px] leading-[28px] tracking-[0.15px] font-medium text-gray-100'>
        <GrFormPrevious className='cursor-pointer' /> Trang 1/1
        <GrFormNext className='cursor-pointer' />
      </div>
    </div>
  )
}

export default News
