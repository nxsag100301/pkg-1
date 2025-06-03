import { FaCircle } from 'react-icons/fa'
import Card from '../components/Card'
import { useParams } from 'react-router-dom'
function DetailPost() {
  const { id } = useParams()
  const card = [
    <Card
      image='/assets/card-image.png'
      title='Sự kiện'
      description='Cập nhật và thông báo liên tục các sự kiện quan trọng của Phúc Khang
              Gems cho khách hàng'
      url='chua co'
    />,
    <Card
      image='/assets/card-image.png'
      title='Sự kiện'
      description='Cập nhật và thông báo liên tục các sự kiện quan trọng của Phúc Khang
              Gems cho khách hàng'
      url='chua co'
    />,
    <Card
      image='/assets/card-image.png'
      title='Sự kiện'
      description='Cập nhật và thông báo liên tục các sự kiện quan trọng của Phúc Khang
              Gems cho khách hàng'
      url='chua co'
    />
  ]
  return (
    <div
      className={
        card && card.length > 0
          ? 'flex flex-row gap-14 bg-outstanding py-[72px] px-[159px]'
          : ''
      }
    >
      <div
        className={
          card && card.length > 0
            ? 'flex flex-col items-center w-[732pxp]'
            : 'py-[72px] px-[272px] flex flex-col items-center'
        }
      >
        <div className='flex flex-col gap-3 pb-6 border-gray-30 border-b'>
          <div className='text-black text-[32px] leading-[48px] font-semibold '>
            THÔNG MINH CỰC RẺ TIỀN - KỶ LUẬT MỚI ĐẮT GIÁ
          </div>
          <div className='flex items-center gap-2 text-gray-90 text-[14px] leading-[20px] tracking-[0.15px]'>
            <FaCircle className='text-[10px] text-red-800' />
            Tác giả
            <span className='text-gray-70'>22:47:54 | 20/05/2025</span>
          </div>
          <div className='text-[18px] leading-[28px] tracking-[0.15px] py-2 '>
            <dl>
              <dt className='pb-4 font-semibold tracking-[0.15px] text-[18px] leading-[28px]'>
                Bạn có biết một điều rằng:{' '}
              </dt>
              <dd className='tracking-[0.15px] text-[18px] leading-[28px]'>
                {' '}
                - Người ta học tập trong lúc bạn ngủ, chơi bời, café, trà sữa,
                hàng quán cùng đám bạn của mình.
              </dd>
              <dd className='tracking-[0.15px] text-[18px] leading-[28px]'>
                {' '}
                - Người ta nỗ lực, cố gắng khép mình ăn uống ngủ nghỉ, lại tập
                thể dục mỗi ngày còn bạn thì chỉ ăn, chơi và ngủ suốt ngày.
              </dd>
              <dd className='tracking-[0.15px] text-[18px] leading-[28px]'>
                {' '}
                - Người ta nai lưng không ngại nắng, mưa để học tập, để giao lưu
                mở rộng mối quan hệ, trong khi bạn chỉ lo nghĩ hôm nay ăn gì, đi
                chơi gì, đi chơi với ai.
              </dd>
              <dd className='tracking-[0.15px] text-[18px] leading-[28px]'>
                {' '}
                - Người ta biết mình là ai, biết mình muốn gì, lập mục tiêu, lập
                kế hoạch cho cuộc đời của chính họ. Còn bạn thì chẳng cần biết,
                cứ như con thuyền vô định, sóng xô đến đâu thì đến.
              </dd>
              <dd className='tracking-[0.15px] text-[18px] leading-[28px]'>
                {' '}
                - Người ta biết nói không với những cuộc chơi mà người ta không
                muốn, và không đúng theo kế hoạch từ trước để học tập và làm
                việc. Còn bạn thì luôn “CÓ”, chỉ cần là ăn và chơi.
              </dd>
            </dl>
          </div>
          <img
            src='/assets/patient.png'
            className=' h-[395px] object-cover object-top py-4'
          />
          <div className='text-[18px] leading-[28px] tracking-[0.15px] py-2 '>
            Và nếu như bạn mải mê tùy ý ham muốn, lúc phải để tâm thì lo vui
            chơi, không biết tự nỗ lực, người khác chơi bạn cũng chơi, người
            khác nỗ lực bạn vẫn đang chơi, p.h.ó.n.g t.ú.n.g bản thân, thì chính
            bạn mới là người không thể thành công.
          </div>{' '}
          <div className='text-[18px] leading-[28px] tracking-[0.15px] py-2 '>
            {' '}
            Người càng tự kỷ luật càng hiểu rõ bản thân thực sự muốn điều gì,
            cho nên mới không thể đem thời gian và sức lực lãng phí một cách
            không có ý nghĩa trên sự việc, mà thực sự tận dụng từng li từng tí
            thời gian để giúp bản thân trưởng thành hơn, và thành công hơn.
          </div>
          <div className='text-[18px] leading-[28px] tracking-[0.15px] py-2 '>
            {' '}
            Một ngày, hai ngày có thể nhìn không ra, một tháng, hai tháng có lẽ
            vẫn chưa nhìn ra, nhưng một năm, hai năm, thậm chí mười năm, hai
            mươi năm, người tự kỷ luật và người không tự kỷ luật, rốt cuộc đi
            trên con đường khác nhau.
          </div>
          <div className='text-[18px] leading-[28px] tracking-[0.15px] py-2 '>
            {' '}
            Cho đi và nhận lại vốn là quy luật của đất trời. Nếu biết kiên trì,
            tích lũy, kỷ luật bản thân, lượng đủ thì chất cũng sẽ đủ. Lúc đó
            những người kỷ luật họ sẽ đạt được ước mơ và mục tiêu của chính họ,
            tự do nó nằm ở chỗ này.{' '}
          </div>
          <div className='text-[18px] leading-[28px] tracking-[0.15px] py-2 '>
            {' '}
            Nếu muốn thành công, bạn nên thôi chỉ nhìn vào thành công của người
            khác mà g.h.e.n t.ỵ, mà trách đời, hãy nhìn vào những nỗ lực, sự kỷ
            luật bản thân của chính họ.
          </div>{' '}
          <div className='text-[18px] leading-[28px] tracking-[0.15px] py-2 '>
            {' '}
            Người thực sự có thể trông ra xa, trèo lên đỉnh cao, luôn luôn là
            người không hề mông lung, kiên trì mà tiến về phía trước. Mong rằng
            chúng ta thực sự trở thành người biết tự kỷ luật, đạt được cuộc sống
            chúng ta mong muốn. Đường đời không có con đường nào gần, nhưng mỗi
            bước bạn đi đều có ý nghĩa.
            <div className='text-[18px] leading-[28px] tracking-[0.15px] py-2 '>
              {' '}
              Càng cố gắng, càng nỗ lực, càng tự kỷ luật, bạn sẽ càng ưu tú.
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-6'>
        {card &&
          card.length > 0 &&
          card.map((item, index) => <div key={index}>{item}</div>)}
      </div>
    </div>
  )
}

export default DetailPost
