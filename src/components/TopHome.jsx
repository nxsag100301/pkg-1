import Navbar from './Navbar'
import Hero from './Hero'

function TopHome() {
  return (
    <div className='relative bg-dark-brown max-h-[1024px] min-h-[1024px] z-20'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default TopHome
