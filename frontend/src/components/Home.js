import { Link } from 'react-router-dom'

const Home = () => {
  return(
    <main className='container py-20 grid content-center justify-items-center'>
      <h1 className='underline font-bold text-5xl uppercase'>Soul Journey</h1>
      <Link className='bg-orange-500 hover:bg-orange-400 no-underline px-5 py-1 text-3xl mt-5 text-slate-50 rounded' to='/detailed-question'>Start Now</Link>
    </main>
  )
}

export default Home