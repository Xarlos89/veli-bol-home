import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Essentials from './sections/Essentials'
import About from './sections/About'
import History from './sections/History'
import Experience from './sections/Experience'
import FoodOnBoard from './sections/FoodOnBoard'
import Gallery from './sections/Gallery'
import Reviews from './sections/Reviews'
import FAQ from './sections/FAQ'
import BookingCTA from './sections/BookingCTA'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Essentials />
        <About />
        <History />
        <Experience />
        <FoodOnBoard />
        <Gallery />
        <Reviews />
        <FAQ />
        <BookingCTA />
      </main>
      <Footer />
    </>
  )
}
