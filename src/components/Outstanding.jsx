// import { useEffect, useState } from 'react'
import Card from './Card'

export default function Outstanding() {
  // const [outstanding, setListOutstanding] = useState([])
  // const getOutstanding = async () => {
  //   try {
  //     const res = await fetch(
  //       'https://brandname.phuckhangnet.vn/api/store/StoredProcedure',
  //       {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify({ loai: 1, domain: 'phamngocthientrang.vn' })
  //       }
  //     )
  //     const data = await res.json()
  //     if (data.error) {
  //       throw new Error(data.error)
  //     }
  //     setListOutstanding([
  //       data.responses[1],
  //       data.responses[6],
  //       data.responses[9]
  //     ])
  //   } catch (error) {
  //     console.log('error fetch news: ', error.message)
  //   }
  // }
  // useEffect(() => {
  //   getOutstanding()
  // }, [])
  // console.log('check state: ', outstanding)
  return (
    <div
      id='outstanding'
      className='flex flex-col max-w-full gap-[50px] md:gap-[72px] bg-outstanding pt-[96px] pb-[80px]'
    >
      <div className='flex justify-center uppercase font-bold text-[20px] md:text-[36px] leading-[44px]'>
        Nổi bật
      </div>
      <div className='flex flex-col flex-wrap justify-center items-center lg:flex-row gap-9'>
        <Card
          image='/assets/aa_09052023024953251.png'
          title='Sự kiện'
          description='Cập nhật và thông báo liên tục các sự kiện quan trọng của Phúc Khang
            Gems'
          url='outstanding/sukien'
        />
        <Card
          image='/assets/outstanding2.png'
          title='Chuyên gia'
          description='Chuyên mục trao đổi, cập nhật các nội dung trao đổi, thông tin trả lời của chuyên gia'
          url='outstanding/chuyengia'
        />
        <Card
          image='/assets/outstanding3.png'
          title='Báo chí'
          description='Chuyên mục thông tin báo chí, truyền thông'
          url='outstanding/baochi'
        />
      </div>
    </div>
  )
}
