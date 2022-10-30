import type { NextPage } from 'next'
import Todo from '../components/Todo'

const Home: NextPage = () => {
  return (
    <main className="min-h-screen py-2 flex justify-center bg-orange-300 flex-col items-center">
      <Todo />
    </main>
  )
}

export default Home
