import type { NextPage } from 'next'
import Card from '../components/card'

const Home: NextPage = () => {
  return (
    <main className="min-h-screen py-2 flex justify-center bg-orange-300 flex-col items-center">
      <Card />
    </main>
  )
}

export default Home
