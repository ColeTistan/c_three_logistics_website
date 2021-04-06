// Import Sass file
import './css/App.scss';

// Import page components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
