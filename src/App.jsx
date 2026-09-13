import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ReferEarn from './pages/ReferEarn';
import SwapCenter from './pages/SwapCenter';
import BonusVEs from './pages/BonusVEs';
import CaptchaTasks from './pages/CaptchaTasks';
import ExchangeCenter from './pages/ExchangeCenter';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="page-wrap">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/refer" element={<ReferEarn />} />
          <Route path="/swap" element={<SwapCenter />} />
          <Route path="/bonus" element={<BonusVEs />} />
          <Route path="/captcha" element={<CaptchaTasks />} />
          <Route path="/exchange" element={<ExchangeCenter />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
