import Hero from '../components/Hero'
import Outstanding from '../components/Outstanding'
import Banner from '../components/Banner'
import Partners from '../components/Partners'
import ComunicateForm from '../components/ComunicateForm'
import NewsSections from '../components/NewsSections'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div id='home' className='w-screen'>
      <Hero />
      <Outstanding />
      <Banner />
      <NewsSections />
      <Partners />
      {/* <ComunicateForm /> */}
    </div>
  )
}
