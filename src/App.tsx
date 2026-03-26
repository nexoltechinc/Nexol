import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './sections/Navigation';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Industries from './pages/Industries';
import Footer from './sections/Footer';
import AIChatWidget from './components/AIChatWidget';
import CookieBanner from './components/CookieBanner';
import AICallingAgent from './pages/AICallingAgent';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-navy text-white overflow-x-hidden">
        {/* Persistent Background gradient blobs */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-[120px] gradient-blob" />
          <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[100px] gradient-blob-delayed" />
          <div className="absolute -bottom-40 left-1/3 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[80px] gradient-blob" />
        </div>

        {/* Global Navigation */}
        <Navigation />

        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/ai-calling-agent" element={<AICallingAgent />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/industries" element={<Industries />} />
        </Routes>

        {/* Persistent Footer */}
        <Footer />

        {/* Global Specialized Components */}
        <AIChatWidget />
        <CookieBanner />
      </div>
    </Router>
  );
}

export default App;
