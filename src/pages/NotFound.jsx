import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center text-center p-4'>
      <h1 className='text-6xl font-bold text-gray-800 mb-4'>404</h1>
      <p className='text-xl text-gray-600 mb-6'>Trang bạn tìm không tồn tại.</p>
      <Link
        to='/'
        className='px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition'
      >
        Quay về trang chủ
      </Link>
    </div>
  )
}

export default NotFound
