const QuestionPage = () => {
  return (
    <main className="container p-20 grid content-center justify-items-stretch">
      <h1 className='text-center underline font-bold text-5xl uppercase'>Finding Balance</h1>


      <form action='' method="POST">
        <div className="mt-10">
          <label htmlFor='' className="text-xl">What are some ways to find balance in life?</label>
          <textarea className="text-black rounded mt-5 block w-full px-5 py-1 pb-20 text-sm bg-orange-100"></textarea>
        </div>
      </form>
    </main>
  )
}

export default QuestionPage