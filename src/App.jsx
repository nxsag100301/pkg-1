import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import News from './pages/News'
import QuestionsAndAnswers from './pages/QuestionsAndAnswers'
import Footer from './components/Footer'
import DetailPost from './pages/DetailPost'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/question' element={<QuestionsAndAnswers />} />
        <Route path='/post/:id' element={<DetailPost />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  )
}

export default App
