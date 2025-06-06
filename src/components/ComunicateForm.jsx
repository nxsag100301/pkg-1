import UserForm from './UserForm'

function ComunicateForm() {
  return (
    <div
      id='booking'
      className='px-10 md:px-20 py-[94px] flex flex-row justify-between 2xl:justify-center gap-[157px] bg-outstanding w-full items-center'
    >
      <div className='max-w-[959px] flex flex-col gap-8'>
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
        <UserForm />
      </div>
      <div className='min-w-[164px] hidden lg:flex flex-col gap-12'>
        <img
          src='/assets/chuyengia1.jpg'
          alt='Chuyen gia 1'
          className='rounded-full w-[164px] h-[164px]  object-cover object-[center_20%]'
        />
        <img
          src='/assets/cg2.png'
          alt='Chuyen gia 2'
          className='rounded-full w-[164px] h-[164px] object-cover object-[center_20%]'
        />
        <img
          src='/assets/cg3.png'
          alt='Chuyen gia 3'
          className='rounded-full w-[164px] h-[164px] object-cover object-[center_20%]'
        />
        <img
          src='/assets/cg4.png'
          alt='Chuyen gia 4'
          className='rounded-full w-[164px] h-[164px] object-cover object-[center_20%]'
        />
      </div>
    </div>
  )
}

export default ComunicateForm
