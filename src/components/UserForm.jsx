import React, { useState } from 'react'

function UserForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    fromDate: '',
    toDate: '',
    location: '',
    content: ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const validate = () => {
    const newErrors = {}
    if (!form.name) newErrors.name = 'Vui lòng nhập họ tên'
    if (!form.phone) newErrors.phone = 'Vui lòng nhập số điện thoại'
    if (!form.email) newErrors.email = 'Vui lòng nhập email'
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = 'Email không hợp lệ'
    if (!form.fromDate || !form.toDate) newErrors.date = 'Vui lòng chọn ngày'
    if (!form.location) newErrors.location = 'Vui lòng nhập địa điểm'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      console.log('form: ', form)
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
          className={`input w-full ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.name && <p className='text-red-500 text-sm'>{errors.name}</p>}
      </div>

      <div className='flex gap-6'>
        <div className='w-1/2'>
          <label className='font-medium'>Số điện thoại</label>
          <input
            type='text'
            name='phone'
            value={form.phone}
            onChange={handleChange}
            placeholder='Nhập số điện thoại'
            className={`input w-full ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.phone && (
            <p className='text-red-500 text-sm'>{errors.phone}</p>
          )}
        </div>
        <div className='w-1/2'>
          <label className='font-medium'>Email</label>
          <input
            type='text'
            name='email'
            value={form.email}
            onChange={handleChange}
            placeholder='Nhập email'
            className={`input w-full ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.email && (
            <p className='text-red-500 text-sm'>{errors.email}</p>
          )}
        </div>
      </div>

      <div className='flex gap-6'>
        <div className='w-1/2'>
          <label className='font-medium'>Từ ngày</label>
          <input
            type='date'
            name='fromDate'
            value={form.fromDate}
            onChange={handleChange}
            className={`input w-full ${
              errors.date ? 'border-red-500' : 'border-gray-300'
            }`}
          />
        </div>
        <div className='w-1/2'>
          <label className='font-medium'>Đến ngày</label>
          <input
            type='date'
            name='toDate'
            value={form.toDate}
            onChange={handleChange}
            className={`input w-full ${
              errors.date ? 'border-red-500' : 'border-gray-300'
            }`}
          />
        </div>
      </div>
      {errors.date && <p className='text-red-500 text-sm'>{errors.date}</p>}

      <div>
        <label className='font-medium'>Địa điểm</label>
        <select
          name='location'
          value={form.location}
          onChange={handleChange}
          className={`input w-full ${
            errors.location ? 'border-red-500' : 'border-gray-300'
          }`}
        >
          <option value=''>Hẹn tại cửa hàng</option>
          <option value='Hồ Chí Minh'>Hồ Chí Minh</option>
          <option value='Hà Nội'>Hà Nội</option>
          <option value='Đà Nẵng'>Đà Nẵng</option>
        </select>
        {errors.location && (
          <p className='text-red-500 text-sm'>{errors.location}</p>
        )}
      </div>

      <div className='flex flex-col'>
        <label className='font-medium'>Nội dung tư vấn</label>
        <textarea
          name='content'
          value={form.content}
          onChange={handleChange}
          placeholder='Tôi cần tư vấn về?'
          className='border p-4 h-[100px] bg-gray-30 rounded-[20px] outline-none'
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
