import { useEffect, useState } from 'react'
import Card from '../components/Card'
import { GrFormPrevious } from 'react-icons/gr'
import { GrFormNext } from 'react-icons/gr'

function News() {
  const [listNews, setListNews] = useState([])
  const getNews = async () => {
    try {
      const res = await fetch(
        'https://brandname.phuckhangnet.vn/api/store/StoredProcedure',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            loai: 6,
            sotrang: 1,
            soitem: 9,
            menuid: '7',
            lang: 'vn'
          })
        }
      )
      const data = await res.json()
      if (data.error) {
        throw new Error(data.error)
      }
      setListNews(data.responses)
    } catch (error) {
      console.log('error fetch news: ', error.message)
    }
  }
  useEffect(() => {
    getNews()
  }, [])
  return (
    <div className='bg-outstanding flex flex-col px-10 md:px-20 pt-[84px] pb-[72px] gap-12 items-center'>
      <div className='flex flex-wrap gap-12 justify-center'>
        {listNews &&
          listNews.length > 0 &&
          listNews.map((news) => (
            <Card
              key={news.id}
              image={`https://brandname.phuckhangnet.vn/ftp_images/${news.avatar}`}
              title={news.title}
              date={news.createdate.split(' ')[0]}
              url={`post/${news.id}`}
            />
          ))}
      </div>
      {/* <div className='flex items-center gap-[18px] text-[18px] leading-[28px] tracking-[0.15px] font-medium text-gray-100'>
        <GrFormPrevious className='cursor-pointer' /> Trang 1/1
        <GrFormNext className='cursor-pointer' />
      </div> */}
    </div>
  )
}

export default News
