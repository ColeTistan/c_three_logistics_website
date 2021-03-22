import './css/App.scss';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Testimonials />
    </div>
  );
}

export default App;
