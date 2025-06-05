import { useState } from 'react'
import { toast } from 'react-toastify'
import { RiArrowDropDownLine } from 'react-icons/ri'

function UserForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    fromDate: '',
    toDate: '',
    bookType: 'ONLINE',
    address: '',
    content: ''
  })
  const [errors, setErrors] = useState({})

  const sendBooking = async (form) => {
    try {
      const res = await fetch(
        'https://brandname.phuckhangnet.vn/api/store/StoredProcedure',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            loai: 101,
            customphone: form.phone,
            customname: form.name,
            customemail: form.email,
            note: form.content,
            addressbook:
              form.bookType === 'ADDRESS'
                ? form.address
                : form.bookType === 'ONLINE'
                ? 'Hẹn trực tuyến'
                : 'Hẹn tại cửa hàng',
            addressbookvalue: form.bookType,
            datetimebook1: form.fromDate,
            datetimebook2: form.toDate
          })
        }
      )
      const data = await res.json()
      if (data.error) {
        throw new Error(data.error)
      }
      if (data.message === 'success' && data.statuscode === 200) {
        toast.success('Đặt hẹn thành công!')
        setForm({
          name: '',
          phone: '',
          email: '',
          fromDate: '',
          toDate: '',
          bookType: '',
          address: '',
          content: ''
        })
      } else {
        toast.error('Đặt hẹn thất bại, có lỗi xảy ra!')
      }
    } catch (error) {
      console.log('error fetch news: ', error.message)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const validate = () => {
    const newErrors = {}
    if (!form.name) newErrors.name = 'Vui lòng nhập họ tên'
    if (form.phone.length !== 10) newErrors.phone = 'Số điện thoại không hợp lệ'
    if (!form.email) newErrors.email = 'Vui lòng nhập email'
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = 'Email không hợp lệ'
    if (!form.fromDate || !form.toDate) newErrors.date = 'Vui lòng chọn ngày'
    if (form.bookType === 'ADDRESS' && !form.address)
      newErrors.address = 'Vui lòng nhập địa chỉ hẹn'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      sendBooking(form)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      <div>
        <label className='font-medium'>Họ tên</label>
        <input
          type='text'
          name='name'
          value={form.name}
          onChange={handleChange}
          placeholder='Nhập họ tên'
          className={`input w-full mt-[8px] ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.name && (
          <p className='text-red-500 text-sm mt-1'>{errors.name}</p>
        )}
      </div>

      <div className='flex flex-col sm:flex-row gap-6'>
        <div className='w-full sm:w-1/2'>
          <label className='font-medium'>Số điện thoại</label>
          <input
            type='text'
            name='phone'
            value={form.phone}
            onChange={(e) => {
              const value = e.target.value
              if (/^\d*$/.test(value)) {
                handleChange(e)
              }
            }}
            placeholder='Nhập số điện thoại'
            className={`input mt-[8px] w-full ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.phone && (
            <p className='text-red-500 text-sm mt-1'>{errors.phone}</p>
          )}
        </div>
        <div className='w-full sm:w-1/2'>
          <label className='font-medium'>Email</label>
          <input
            type='text'
            name='email'
            value={form.email}
            onChange={handleChange}
            placeholder='Nhập email'
            className={`input mt-[8px] w-full ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.email && (
            <p className='text-red-500 text-sm mt-1'>{errors.email}</p>
          )}
        </div>
      </div>

      <div className='flex flex-col sm:flex-row gap-6'>
        <div className='w-full sm:w-1/2 flex flex-col'>
          <label className='font-medium'>Từ ngày</label>
          <input
            type='date'
            name='fromDate'
            value={form.fromDate}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            className={`input w-full mt-[8px] ${
              errors.date ? 'border-red-500' : 'border-gray-300'
            }`}
          />
        </div>
        <div className='w-full sm:w-1/2 flex flex-col'>
          <label className='font-medium'>Đến ngày</label>
          <input
            type='date'
            name='toDate'
            value={form.toDate}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            className={`input w-full mt-[8px] ${
              errors.date ? 'border-red-500' : 'border-gray-300'
            }`}
          />
        </div>
      </div>
      {errors.date && (
        <p className='text-red-500 text-sm relative bottom-3'>{errors.date}</p>
      )}

      <div className='relative'>
        <label className='font-medium'>Địa điểm</label>
        <select
          name='bookType'
          value={form.bookType}
          onChange={handleChange}
          className='input w-full border-gray-300 mt-[8px] appearance-none pr-10'
        >
          <option value='ONLINE'>Hẹn trực tuyến</option>
          <option value='OFFLINE'>Hẹn tại cửa hàng</option>
          <option value='ADDRESS'>Hẹn tại địa chỉ</option>
        </select>
        <RiArrowDropDownLine className='pointer-events-none absolute right-3 top-[52px] text-[28px]' />
      </div>

      {form.bookType === 'ADDRESS' && (
        <div>
          <label className='font-medium'>Địa chỉ</label>
          <input
            type='text'
            name='address'
            value={form.address}
            onChange={handleChange}
            placeholder='Nhập địa chỉ'
            className={`input w-full mt-[8px] ${
              errors.address ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.address && (
            <p className='text-red-500 text-sm'>{errors.address}</p>
          )}
        </div>
      )}

      <div className='flex flex-col'>
        <label className='font-medium'>Nội dung tư vấn</label>
        <textarea
          name='content'
          value={form.content}
          onChange={handleChange}
          placeholder='Tôi cần tư vấn về?'
          className='border-2 p-4 bg-gray-30 rounded-[20px] mt-[8px] outline-none focus:border-black'
        />
      </div>
      <button
        type='submit'
        className='button bg-primary w-full h-[60px] text-white rounded-lg'
      >
        Đặt hẹn
      </button>
    </form>
  )
}

export default UserForm
