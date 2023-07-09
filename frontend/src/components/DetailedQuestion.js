import { Link } from "react-router-dom"

const DetailedQuestion = () => {
  return (
    <main className="container p-20 grid content-center justify-items-center">
      <h1 className='underline font-bold text-5xl uppercase'>Choose a topic</h1>

      <Link to='/question-page' className="mt-10 hover:shadow-lg px-5 py-2 rounded">
        <h2 className="text-xl font-bold">1. Finding Balance</h2>

        <p className="mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore sunt hic praesentium delectus ipsa quasi a voluptatibus natus, voluptatem expedita, unde perspiciatis neque nobis ducimus provident nesciunt maiores mollitia magni?</p>
      </Link>
      <Link to='/question-page' className="mt-5 hover:shadow-lg px-5 py-2 rounded">
        <h2 className="text-xl font-bold">2. Finding Balance</h2>

        <p className="mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore sunt hic praesentium delectus ipsa quasi a voluptatibus natus, voluptatem expedita, unde perspiciatis neque nobis ducimus provident nesciunt maiores mollitia magni?</p>
      </Link>
      <Link to='/question-page' className="mt-5 hover:shadow-lg px-5 py-2 rounded">
        <h2 className="text-xl font-bold">3. Finding Balance</h2>

        <p className="mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore sunt hic praesentium delectus ipsa quasi a voluptatibus natus, voluptatem expedita, unde perspiciatis neque nobis ducimus provident nesciunt maiores mollitia magni?</p>
      </Link>
    </main>
  )
} 

export default DetailedQuestion