import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import DetailedQuestion from './DetailedQuestion'
import Showcase from './Showcase'
import Diary from './Diary'
import QuestionPage from './QuestionPage'

const MainPage = () => {
  return (
    <>
      <nav>
        <ul className='mt-5 flex items-center gap-16 justify-end container list-none'>
          <li><Link className='hover:text-orange-400' to='/'>Home</Link></li>
          <li><Link className='hover:text-orange-400' to='/detailed-question'>Detailed Question</Link></li>
          <li><Link className='hover:text-orange-400' to='/showcase'>Showcase</Link></li>
          <li><Link className='hover:text-orange-400' to='/diary'>Diary</Link></li>
        </ul>
      </nav>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detailed-question' element={<DetailedQuestion />} />
        <Route path='/question-page' element={<QuestionPage />} />
        <Route path='/showcase' element={<Showcase />} />
        <Route path='/diary' element={<Diary />} />
      </Routes>
    </>
  )
}

export default MainPage