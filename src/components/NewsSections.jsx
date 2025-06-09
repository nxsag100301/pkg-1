import { useEffect, useState } from 'react'
import Card from './Card'

function NewsSections() {
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
            soitem: '3',
            menuparentid: 7,
            menuid: 7,
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
    <div
      id='news-section'
      className='flex flex-col mx-auto gap-[50px] md:gap-[72px] bg-outstanding pt-[96px] pb-[80px] xl:px-[80px] px-6 sm:px-20'
    >
      <div className='flex justify-center uppercase font-bold text-[20px] md:text-[36px] leading-[44px]'>
        Tin tức
      </div>
      <div className='flex flex-col flex-wrap justify-center items-center 2xl:flex-row gap-9'>
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
    </div>
  )
}

export default NewsSections
