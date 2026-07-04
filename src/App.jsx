import { CartProvider } from './context/CartContext.jsx'
import { HoursProvider } from './context/HoursContext.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Menu from './components/Menu.jsx'
import Promos from './components/Promos.jsx'
import About from './components/About.jsx'
import Testimonials from './components/Testimonials.jsx'
import Gallery from './components/Gallery.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Cart from './components/Cart.jsx'
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx'

export default function App() {
  return (
    <HoursProvider>
    <CartProvider>
      <div className="min-h-screen bg-white font-body text-ink antialiased">
        <Navbar />
        <main>
          <Hero />
          <Menu />
          <Promos />
          <About />
          <Gallery />
          <Testimonials />
          <Contact />
        </main>
        <Footer />

        {/* Elementos flotantes */}
        <Cart />
        <FloatingWhatsApp />
      </div>
    </CartProvider>
    </HoursProvider>
  )
}
