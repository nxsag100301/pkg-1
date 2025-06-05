import { useState } from 'react'
import { toast } from 'react-toastify'
import DatePicker from 'react-datepicker'
import Select from 'react-select'
import { FaCalendarAlt } from 'react-icons/fa'
import { RiArrowDropDownLine } from 'react-icons/ri'
import 'react-datepicker/dist/react-datepicker.css'
// eslint-disable-next-line no-unused-vars
import { components } from 'react-select'

const CustomDropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <RiArrowDropDownLine size={24} color={'black'} />
    </components.DropdownIndicator>
  )
}

function UserForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    fromDate: null,
    toDate: null,
    bookType: 'ONLINE',
    address: '',
    content: ''
  })

  const [errors, setErrors] = useState({})

  const bookTypeOptions = [
    { value: 'ONLINE', label: 'Hẹn trực tuyến' },
    { value: 'OFFLINE', label: 'Hẹn tại cửa hàng' },
    { value: 'ADDRESS', label: 'Hẹn tại địa chỉ' }
  ]

  const customSelectStyles = {
    control: (base, state) => ({
      ...base,
      borderWidth: '1px',
      borderColor: state.isFocused ? 'black' : 'none', // hoặc màu gray bạn muốn
      padding: '0 16px', // p-4 ngang (px-4)
      height: '60px', // h-[60px]
      backgroundColor: '#f0f4f8', // tương đương bg-gray-30 (có thể đổi màu cho gần đúng)
      borderRadius: '20px', // rounded-[20px]
      boxShadow: state.isFocused ? 'black' : 'none',
      '&:hover': {
        borderColor: 'none'
      }
    }),
    valueContainer: (base) => ({
      ...base,
      padding: '0' // vì padding đã ở control rồi
    }),
    input: (base) => ({
      ...base,
      margin: '0',
      padding: '0'
    }),
    placeholder: (base) => ({
      ...base,
      margin: '0',
      padding: '0',
      color: '#9ca3af' // gray-400
    }),
    indicatorsContainer: (base) => ({
      ...base,
      paddingRight: '8px'
    })
  }

  const formatDate = (date) => {
    if (!date) return ''
    const d = new Date(date)
    const day = String(d.getDate()).padStart(2, '0')
    const month = String(d.getMonth() + 1).padStart(2, '0')
    const year = d.getFullYear()
    return `${day}/${month}/${year}`
  }

  const validate = () => {
    const newErrors = {}
    if (!form.name) newErrors.name = 'Vui lòng nhập họ tên'
    if (form.phone.length !== 10) newErrors.phone = 'Số điện thoại không hợp lệ'
    if (!form.email) newErrors.email = 'Vui lòng nhập email'
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = 'Email không hợp lệ'
    if (!form.fromDate || !form.toDate) newErrors.date = 'Vui lòng chọn ngày'
    else if (form.fromDate > form.toDate)
      newErrors.date = 'Ngày kết thúc không được nhỏ hơn ngày bắt đầu'
    if (form.bookType === 'ADDRESS' && !form.address)
      newErrors.address = 'Vui lòng nhập địa chỉ hẹn'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const sendBooking = async (formData) => {
    try {
      const res = await fetch(
        'https://brandname.phuckhangnet.vn/api/store/StoredProcedure',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            loai: 101,
            customphone: formData.phone,
            customname: formData.name,
            customemail: formData.email,
            note: formData.content,
            addressbook:
              formData.bookType === 'ADDRESS'
                ? formData.address
                : formData.bookType === 'ONLINE'
                ? 'Hẹn trực tuyến'
                : 'Hẹn tại cửa hàng',
            addressbookvalue: formData.bookType,
            datetimebook1: formData.fromDate,
            datetimebook2: formData.toDate
          })
        }
      )
      const data = await res.json()
      if (data.error) throw new Error(data.error)

      if (data.message === 'success' && data.statuscode === 200) {
        toast.success('Đặt hẹn thành công!')
        setForm({
          name: '',
          phone: '',
          email: '',
          fromDate: null,
          toDate: null,
          bookType: 'ONLINE',
          address: '',
          content: ''
        })
      } else {
        toast.error('Đặt hẹn thất bại, có lỗi xảy ra!')
      }
    } catch (error) {
      console.log('error fetch booking: ', error.message)
      toast.error('Lỗi khi gửi yêu cầu đặt hẹn!')
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      const formattedForm = {
        ...form,
        fromDate: formatDate(form.fromDate),
        toDate: formatDate(form.toDate)
      }
      console.log('check form: ', formattedForm)
      sendBooking(formattedForm)
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
        <div className='w-full sm:w-1/2 flex flex-col relative'>
          <label className='font-medium'>Từ ngày</label>
          <DatePicker
            selected={form.fromDate}
            onChange={(date) =>
              setForm((prev) => ({
                ...prev,
                fromDate: date,
                toDate: prev.toDate && prev.toDate < date ? date : prev.toDate
              }))
            }
            minDate={new Date()}
            dateFormat='dd/MM/yyyy'
            placeholderText='Chọn ngày bắt đầu'
            className={`input w-full mt-[8px] ${
              errors.date ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          <FaCalendarAlt className='absolute right-4 bottom-5' />
        </div>

        <div className='w-full sm:w-1/2 flex flex-col relative'>
          <label className='font-medium'>Đến ngày</label>
          <DatePicker
            selected={form.toDate}
            onChange={(date) => setForm((prev) => ({ ...prev, toDate: date }))}
            minDate={form.fromDate || new Date()}
            disabled={!form.fromDate}
            dateFormat='dd/MM/yyyy'
            placeholderText='Chọn ngày kết thúc'
            className={`input w-full mt-[8px] ${
              errors.date ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          <FaCalendarAlt className='absolute right-4 bottom-5' />
        </div>
      </div>
      {errors.date && (
        <p className='text-red-500 text-sm relative bottom-3'>{errors.date}</p>
      )}

      <div className='relative'>
        <label className='font-medium mb-1 block'>Địa điểm</label>
        <Select
          components={{
            DropdownIndicator: CustomDropdownIndicator,
            IndicatorSeparator: () => null
          }}
          options={bookTypeOptions}
          value={bookTypeOptions.find((opt) => opt.value === form.bookType)}
          onChange={(selectedOption) =>
            setForm((prev) => ({
              ...prev,
              bookType: selectedOption.value
            }))
          }
          styles={customSelectStyles}
          classNamePrefix={
            errors.bookType ? 'react-select-error' : 'react-select'
          }
          placeholder='Chọn địa điểm'
        />
        {errors.bookType && (
          <p className='text-red-500 text-sm mt-1'>{errors.bookType}</p>
        )}
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
