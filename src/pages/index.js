import { Routes, Route } from 'react-router-dom'
import {
  Navbar,
  Home,
  About,
  Skills,
  Projects,
  Contact,
  Footer,
} from '../components'

export default function IndexPage() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
