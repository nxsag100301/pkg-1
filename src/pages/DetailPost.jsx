import { FaCircle } from 'react-icons/fa'
import Card from '../components/Card'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
function DetailPost() {
  const { id } = useParams()
  const [listNews, setListNews] = useState()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const getNews = async (id) => {
    try {
      setLoading(true)
      const res = await fetch(
        'https://brandname.phuckhangnet.vn/api/store/StoredProcedure',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            loai: 62,
            sotrang: 1,
            postid: id.toString()
          })
        }
      )
      const data = await res.json()
      if (data.error) {
        throw new Error(data.error)
      }
      setListNews(data.responses)
    } catch (error) {
      setLoading(false)
      console.log('error fetch news: ', error.message)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    getNews(id)
  }, [id])
  const card = [
    // <Card
    //   image='/assets/card-image.png'
    //   title='Sự kiện'
    //   description='Cập nhật và thông báo liên tục các sự kiện quan trọng của Phúc Khang
    //           Gems cho khách hàng'
    //   url='chua co'
    // />,
    // <Card
    //   image='/assets/card-image.png'
    //   title='Sự kiện'
    //   description='Cập nhật và thông báo liên tục các sự kiện quan trọng của Phúc Khang
    //           Gems cho khách hàng'
    //   url='chua co'
    // />,
    // <Card
    //   image='/assets/card-image.png'
    //   title='Sự kiện'
    //   description='Cập nhật và thông báo liên tục các sự kiện quan trọng của Phúc Khang
    //           Gems cho khách hàng'
    //   url='chua co'
    // />
  ]
  return (
    <div
      className={
        card && card.length > 0
          ? 'flex flex-row gap-14 bg-outstanding py-[72px] px-[159px] mt-[90px]'
          : 'w-full mt-[90px]'
      }
    >
      {loading ? (
        <div className='h-screen flex justify-center items-center'>
          <svg
            aria-hidden='true'
            class='w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-primary'
            viewBox='0 0 100 101'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
              fill='currentColor'
            />
            <path
              d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
              fill='currentFill'
            />
          </svg>
          <span class='sr-only'>Loading...</span>
        </div>
      ) : (
        <>
          <div
            className={
              card && card.length > 0
                ? 'flex flex-col items-center w-[732pxp]'
                : 'py-[72px] w-full px-[50px] md:px-[100px] lg:px-[150px] xl:px-[240px] 2xl:px-[272px] flex flex-col items-center'
            }
          >
            <div className='flex flex-col gap-3 pb-6 border-gray-30 border-b'>
              <div className='text-black text-[20px] md:text-[32px] md:leading-[48px] font-semibold '>
                {listNews && listNews.length > 0 && listNews[0].title}
              </div>
              <div className='flex items-center gap-2 text-gray-90 text-[14px] leading-[20px] tracking-[0.15px]'>
                <FaCircle className='text-[10px] text-red-800' />
                Tác giả
                <span className='text-gray-70'>
                  {listNews && listNews.length > 0 && listNews[0].createdate}
                </span>
              </div>
              {listNews && listNews.length > 0 && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: listNews[0].articlecontent
                  }}
                />
              )}
            </div>
          </div>
          <div className='flex flex-col gap-6'>
            {card &&
              card.length > 0 &&
              card.map((item, index) => <div key={index}>{item}</div>)}
          </div>
        </>
      )}
    </div>
  )
}

export default DetailPost
