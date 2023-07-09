import { Link } from 'react-router-dom'
import heroImage from '../assets/hero-image.png'
import progress from '../assets/progress.png'

const Home = () => {
  return(
    <main className='container py-20 grid content-center justify-items-center'>
      <div className='my-10 hero-section flex items-center justify-sb'>
        <div>
          <h1 className='font-bold text-5xl'>Your personal growth app,</h1>
          <p className='mt-5 text-xl'>Work Smarter not harder</p>
        </div>

        <div><img src={heroImage} role='presentation' alt='hero-section'/></div>
      </div>

      <div className='my-10'>
        <h2 className='font-normal mb-6 text-3xl'>Track your Progress</h2>

        <div><img src={progress} role='presentation' alt='progress-section'/></div>
      </div>

      <Link className='bg-indigo-500 hover:bg-indigo-400 no-underline px-5 py-1 text-3xl mt-5 text-slate-50 rounded' to='/detailed-question'>Start Now</Link>
    </main>
  )
}

export default Home