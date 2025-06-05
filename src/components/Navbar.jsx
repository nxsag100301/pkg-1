import { useCallback, useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { IoMenuSharp } from 'react-icons/io5'
import { IoMdClose } from 'react-icons/io'

export default function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)
  // const lastScrollY = useRef(0)
  const navigate = useNavigate()
  const location = useLocation()
  const menuRef = useRef(null)

  const scrollToSection = useCallback((sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  const goToBookingSection = () => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: 'booking' } })
    } else {
      scrollToSection('booking')
    }
  }

  const goToOutstandingSection = () => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: 'outstanding' } })
    } else {
      scrollToSection('outstanding')
    }
  }

  const goToPartnersSection = () => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: 'partners' } })
    } else {
      scrollToSection('partners')
    }
  }

  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      scrollToSection(location.state.scrollTo)
    }
  }, [location, scrollToSection])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpenMenu(false)
      }
    }
    if (isOpenMenu) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpenMenu])

  // 👇 Logic ẩn/hiện Navbar khi cuộn
  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentY = window.scrollY

      if (currentY < 200) {
        // Luôn hiện navbar khi scroll lên gần top
        setShowNavbar(true)
      } else {
        if (currentY > lastScrollY) {
          // Cuộn xuống thì ẩn navbar
          setShowNavbar(false)
        } else {
          // Cuộn lên thì hiện navbar
          setShowNavbar(true)
        }
      }
      lastScrollY = currentY
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={`sticky top-0 left-0 z-20 w-full flex items-center justify-between bg-primary py-6 px-6 sm:px-20 transition-all duration-300 ${
        showNavbar
          ? 'h-[90px] translate-y-0'
          : 'h-0 translate-y-[-90px] overflow-hidden'
      }`}
    >
      <div className='h-[70px] flex flex-row gap-[72px] items-center'>
        <img
          src='/assets/logophuckhang.png'
          alt='Logo Phuc Khang'
          className='w-[92px] h-[50px] md:w-[112px] md:h-[70px] cursor-pointer'
          onClick={() => navigate('/')}
        />
        <div className='hidden lg:flex flex-row gap-[72px] items-center'>
          <span
            className='text-white cursor-pointer'
            onClick={goToOutstandingSection}
          >
            Nổi bật
          </span>
          <span
            className='text-white cursor-pointer'
            onClick={goToPartnersSection}
          >
            Khách hàng
          </span>
          <span
            className='text-white cursor-pointer'
            onClick={goToBookingSection}
          >
            Đặt hẹn
          </span>
          <span
            className='text-white cursor-pointer'
            onClick={() => navigate('/news')}
          >
            Tin tức
          </span>
          <span
            className='text-white cursor-pointer'
            onClick={() => navigate('/question')}
          >
            Hỏi và Trả lời
          </span>
        </div>
      </div>

      <div
        className='button !hidden lg:!flex text-primary text-[20px] leading-[32px] font-medium font-jakarta bg-white h-[52px] w-40'
        onClick={goToBookingSection}
      >
        Đặt lịch
      </div>

      {isOpenMenu && (
        <div
          ref={menuRef}
          className='absolute top-[70px] right-8 bg-white shadow-md rounded-md flex flex-col items-start w-48 p-4 gap-4 z-50 lg:hidden'
        >
          <div
            className='text-dark-brown bg-white cursor-pointer'
            onClick={() => {
              goToOutstandingSection()
              setIsOpenMenu(false)
            }}
          >
            Nổi bật
          </div>
          <span
            className='text-dark-brown cursor-pointer'
            onClick={() => {
              goToPartnersSection()
              setIsOpenMenu(false)
            }}
          >
            Khách hàng
          </span>
          <span
            className='text-dark-brown cursor-pointer'
            onClick={() => {
              goToBookingSection()
              setIsOpenMenu(false)
            }}
          >
            Đặt hẹn
          </span>
          <span
            className='text-dark-brown cursor-pointer'
            onClick={() => {
              navigate('/news')
              setIsOpenMenu(false)
            }}
          >
            Tin tức
          </span>
          <span
            className='text-dark-brown cursor-pointer'
            onClick={() => {
              navigate('/question')
              setIsOpenMenu(false)
            }}
          >
            Hỏi và Trả lời
          </span>
        </div>
      )}

      <div className='lg:hidden'>
        {isOpenMenu ? (
          <IoMdClose
            className='size-8 text-dark-brown z-10 cursor-pointer'
            onClick={() => setIsOpenMenu(false)}
          />
        ) : (
          <IoMenuSharp
            className='size-8 text-dark-brown z-10 cursor-pointer'
            onClick={() => setIsOpenMenu(true)}
          />
        )}
      </div>
    </div>
  )
}
