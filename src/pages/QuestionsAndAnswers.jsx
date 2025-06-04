import React, { useEffect, useState } from 'react'

function QuestionsAndAnswers() {
  const [listQA, setListQA] = useState([])
  const [expandedIds, setExpandedIds] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const toggleExpand = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }
  const getQA = async () => {
    try {
      const res = await fetch(
        'https://brandname.phuckhangnet.vn/api/store/StoredProcedure',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            loai: 64,
            sotrang: 1,
            soitem: 9,
            menuparentid: '24',
            lang: 'vn'
          })
        }
      )
      const data = await res.json()
      if (data.error) {
        throw new Error(data.error)
      }
      setListQA(data.responses)
    } catch (error) {
      console.log('error fetch news: ', error.message)
    }
  }
  useEffect(() => {
    getQA()
  }, [])
  return (
    <div className='bg-outstanding mt-[90px] relative px-10 lg:px-20 py-20 border-2 border-gray-950'>
      <div className='font-bold text-[28px] md:text-[36px] leading-[34px] md:leading-[44px] uppercase pb-20'>
        Hỏi và trả lời
      </div>
      <div className='flex flex-col flex-wrap xl:flex-row justify-between gap-20 lg:gap-40'>
        {listQA &&
          listQA.length > 0 &&
          listQA.map((item) => {
            const isExpanded = expandedIds.includes(item.id)
            return (
              <div key={item.id} className='flex flex-col gap-4 max-w-[543px]'>
                <div className='text-midnight-100 text-[24px] leading-[32px] font-semibold'>
                  {item.question}
                </div>
                <div className='font-medium text-[16px] leading-6 tracking-[0.15px] text-gray-70'>
                  {item.createdate.split(' ')[0]}
                </div>
                <div
                  className={`text-[20px] leading-[32px] text-gray-90 relative ${
                    isExpanded ? '' : 'max-h-[200px] overflow-hidden'
                  }`}
                >
                  {item.answer}
                </div>
                <span
                  className='text-primary-100 italic cursor-pointer self-start'
                  onClick={() => toggleExpand(item.id)}
                >
                  {isExpanded ? 'Thu gọn' : 'Đọc tiếp'}
                </span>
              </div>
            )
          })}
        {/* <div className='flex flex-col gap-4 max-w-[543px]'>
          <div className='text-midnight-100 text-[24px] leading-[32px] font-semibold'>
            Bị đơn phương chấm dứt hợp đồng lao động vì Covid-19?
          </div>
          <div className='font-medium text-[16px] leading-6 tracking-[0.15px] text-gray-70'>
            30/05/2022
          </div>
          <div className='text-[20px] leading-[32px] text-gray-90'>
            Luật sư Bùi Quốc Tuấn (Đoàn luật sư TP.HCM): Ngày 11.3.2020, Tổ chức
            Y tế thế giới (WHO) đã tuyên bố dịch bệnh viêm đường hô hấp cấp
            Covid-19 do chủng mới của vi rút SARS-CoV-2 là đại dịch toàn
            cầu....Ngày 1.4.2020, Thủ tướng Nguyễn Xuân Phúc đã công bố Quyết
            định 447/QĐ-TTg với nội dung xác định Covid-19 là bệnh truyền nhiễm
            nhóm A...{' '}
            <span className='text-primary-100 italic cursor-pointer'>
              Đọc tiếp
            </span>
          </div>
        </div> */}
        {/* <div className='flex flex-col gap-4'>
          <div className='text-midnight-100 text-[24px] leading-[32px] font-semibold'>
            Trong thời gian giãn cách, khu vực tôi ở (H.Nhà Bè, TP.HCM - NV)
            không thấy nhân viên công ty cấp nước đến ghi số nước? Nếu để dồn số
            nước vài tháng mới ghi thì liệu có bị tính sử dụng nước quá định
            mức?
          </div>
          <div className='font-medium text-[16px] leading-6 tracking-[0.15px] text-gray-70'>
            21/05/2022
          </div>
          <div className='text-[20px] leading-[32px] text-gray-90'>
            Theo thông báo từ Công ty cổ phần cấp nước Nhà Bè, do dịch Covid-19,
            thực hiện các chỉ thị của thành phố, việc ghi chỉ số nước tại nhà
            khách hàng tạm ngưng. Vì thế, hóa đơn nước từ tháng 7.2021 trở về
            sau cho đến khi có thông báo mới sẽ được tính trung bình theo phương
            pháp giả định {`(`}tức trung bình...
            <span className='text-primary-100 italic cursor-pointer'>
              Đọc tiếp
            </span>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default QuestionsAndAnswers
