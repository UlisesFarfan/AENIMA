import Head from 'next/head'
import NavBar from '@/components/NavBar/NavBar'
import HomeSection from '@/components/HomeSection/HomeSection'
import TrendSection from '@/components/TrendSection/TrendSection'
import Footer from '@/components/Footer/Footer'
import BlogSection from '@/components/BlogSection/BlogSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Aenima</title>
      </Head>
      <div className='app-container'>
        <NavBar />
        <section className="home-section">
          <HomeSection />
        </section>
        <div className="info-section">
          <section className="trend-section">
            <TrendSection />
          </section>
          <section className="blog-section">
            <BlogSection />
          </section>
        </div>
        <Footer />
      </div>
    </>
  )
}
