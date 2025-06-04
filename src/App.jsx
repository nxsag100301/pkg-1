import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import News from './pages/News'
import QuestionsAndAnswers from './pages/QuestionsAndAnswers'
import Footer from './components/Footer'
import DetailPost from './pages/DetailPost'
import ListOutstanding from './pages/ListOutstanding'

// https://pkg-1.vercel.app/

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
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
