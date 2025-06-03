import UserForm from './UserForm'

function ComunicateForm() {
  return (
    <div
      id='booking'
      className='px-20 flex flex-row justify-between gap-[157px] bg-outstanding h-[1024px] w-full items-center'
    >
      <div className='w-[959px] h-[836px] flex flex-col gap-8'>
        <div className='flex flex-col gap-4'>
          <span className='uppercase font-bold text-[36px] leading-[44px]'>
            TRÒ CHUYỆN CÙNG CHUYÊN GIA
          </span>
          <span className='text-gray-90 text-[18px] leading-[28px] tracking-[0.15px]'>
            Chuyên mục trò chuyện cùng chuyên gia về các lĩnh vực: Phong Thuỷ,
            Kiến thức về đá quý, Số Học pytago, Tử Vi, Sinh trắc vân tay, DISC…
            được những chuyên gia uy tính trong từng lĩnh vực trực tiếp luận
            giải và trao đổi.
          </span>
        </div>
        <div className=' h-[584px]'>
          <UserForm />
        </div>
      </div>
      <div className='w-[164px] h-[800px] flex flex-col gap-12'>
        <img
          src='/assets/chuyengia1.jpg'
          alt='Chuyen gia 1'
          className='rounded-full w-[164px] h-[164px] object-cover'
        />
        <img
          src='/assets/chuyengia1.jpg'
          alt='Chuyen gia 1'
          className='rounded-full w-[164px] h-[164px] object-cover'
        />
        <img
          src='/assets/chuyengia1.jpg'
          alt='Chuyen gia 1'
          className='rounded-full w-[164px] h-[164px] object-cover'
        />
        <img
          src='/assets/chuyengia1.jpg'
          alt='Chuyen gia 1'
          className='rounded-full w-[164px] h-[164px] object-cover'
        />
      </div>
    </div>
  )
}

export default ComunicateForm
