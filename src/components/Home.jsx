import Navbar from './Navbar'
import Hero from './Hero'
import Outstanding from './Outstanding'
import Banner from './Banner'
import TopHome from './TopHome'
import News from './News'
import Partners from './Partners'
import ComunicateForm from './ComunicateForm'

export default function Home() {
  return (
    <div className='h-screen w-screen relative'>
      <TopHome />
      <Outstanding />
      <Banner />
      <News />
      <Partners />
      <ComunicateForm />
    </div>
  )
}
