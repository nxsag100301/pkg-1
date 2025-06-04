import { useEffect, useState } from 'react'
import Card from '../components/Card'
import { useParams } from 'react-router-dom'

function ListOutstanding() {
  const { id } = useParams()
  const [listNews, setListNews] = useState([])
  console.log('check listNews', listNews)
  const getNews = async (id) => {
    try {
      switch (id) {
        case 'sukien':
          {
            const res = await fetch(
              'https://brandname.phuckhangnet.vn/api/store/StoredProcedure',
              {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  loai: 6,
                  sotrang: 1,
                  soitem: 9,
                  menuid: '19',
                  lang: 'vn'
                })
              }
            )
            const data = await res.json()
            if (data.error) {
              throw new Error(data.error)
            }
            setListNews(data.responses)
          }
          break
        case 'chuyengia':
          {
            const res = await fetch(
              'https://brandname.phuckhangnet.vn/api/store/StoredProcedure',
              {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  loai: 6,
                  sotrang: 1,
                  menuid: '20',
                  soitem: 9,
                  lang: 'vn'
                })
              }
            )
            const data = await res.json()
            if (data.error) {
              throw new Error(data.error)
            }
            setListNews(data.responses)
          }
          break
        case 'baochi':
          {
            const res = await fetch(
              'https://brandname.phuckhangnet.vn/api/store/StoredProcedure',
              {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  loai: 6,
                  sotrang: 1,
                  soitem: 9,
                  menuid: '21',
                  lang: 'vn'
                })
              }
            )
            const data = await res.json()
            if (data.error) {
              throw new Error(data.error)
            }
            setListNews(data.responses)
          }
          break
        default:
      }
    } catch (error) {
      console.log('error fetch news: ', error.message)
    }
  }
  useEffect(() => {
    getNews(id)
  }, [id])
  return (
    <div className='bg-outstanding flex flex-col px-10 md:px-20 pt-[84px] pb-[72px] gap-12 items-start'>
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

export default ListOutstanding
