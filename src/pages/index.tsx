import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'

export default function Home() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Contact />
      </main>
    </>
  )
}
