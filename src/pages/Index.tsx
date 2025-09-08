import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import TheDome from '../components/TheDome';
import FoodMenu from '../components/FoodMenu';
import Gallery from '../components/Gallery';
import Booking from '../components/Booking';
import Socials from '../components/Socials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <TheDome />
        <FoodMenu />
        <Gallery />
        <Booking />
        <Socials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
