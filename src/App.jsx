import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import HomePage from './pages/homepage';
import AboutPage from './pages/About';
import ServicesPage from './pages/Services';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/basic-components/indes';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </>
  );
}

export default App;
