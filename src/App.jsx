// src/App.jsx
import Background from './components/Background';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Menu from './components/Menu';
import About from './components/About';
import Reviews from './components/Reviews';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

function App() {
  return (
    <Background>
      <Navbar />
      <ScrollReveal>
        <Homepage />
      </ScrollReveal>
      <div className="relative bg-white px-6 py-14 sm:px-10">
        <ScrollReveal>
          <About />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <Menu />
        </ScrollReveal>
      </div>
      <ScrollReveal>
        <Reviews />
      </ScrollReveal>
      <ScrollReveal>
        <MapSection />
      </ScrollReveal>
      <Footer />
    </Background>
  );
}

export default App;