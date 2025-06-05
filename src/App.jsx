import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import News from './pages/News'
import QuestionsAndAnswers from './pages/QuestionsAndAnswers'
import Footer from './components/Footer'
import DetailPost from './pages/DetailPost'
import ListOutstanding from './pages/ListOutstanding'
import NotFound from './pages/NotFound'
import { ToastContainer } from 'react-toastify'

// https://pkg-1.vercel.app/

function App() {
  return (
    <Router>
      <ToastContainer position='top-right' autoClose={1500} theme='light' />
      <Navbar />
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/question' element={<QuestionsAndAnswers />} />
        <Route path='/post/:id' element={<DetailPost />} />
        <Route path='/outstanding/:id' element={<ListOutstanding />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
