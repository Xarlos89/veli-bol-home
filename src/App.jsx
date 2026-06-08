import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Essentials from './sections/Essentials'
import About from './sections/About'
import Experience from './sections/Experience'
import FoodOnBoard from './sections/FoodOnBoard'
import Gallery from './sections/Gallery'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Essentials />
        <About />
        <Experience />
        <FoodOnBoard />
        <Gallery />
      </main>
      <Footer />
    </>
  )
}
