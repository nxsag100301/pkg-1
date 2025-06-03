import React from 'react'

function QuestionsAndAnswers() {
  return (
    <div className='bg-outstanding relative px-20 py-20'>
      <div className='font-bold text-[36px] leading-[44px] uppercase pb-20'>
        Hỏi và trả lời
      </div>
      <div className='flex justify-between gap-40'>
        <div className='flex flex-col gap-4 max-w-[543px]'>
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
        </div>
        <div className='flex flex-col gap-4'>
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
        </div>
      </div>
    </div>
  )
}

export default QuestionsAndAnswers
