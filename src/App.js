import { useState } from 'react';
import IntroAnimation from './components/IntroAnimation';
import MainWebsite from './components/MainWebsite';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlantWatering from './pages/PlantWatering';
import Portfolio from './pages/Portfolio';
import F1Telemetry from './pages/F1Telemetry';

function App() {
  const [showMain, setShowMain] = useState(false);

  return (
    <Router>
      <Routes>
       <Route
  path="/"
  element={
    !showMain && window.location.hash === '' ? (
      <IntroAnimation onFinish={() => setShowMain(true)} />
    ) : (
      <MainWebsite />
    )
  }
/>

        {/* ✅ Fixed route paths below */}
        <Route path="/projects/plant-watering" element={<PlantWatering />} />
        <Route path="/projects/portfolio" element={<Portfolio />} />
        <Route path="/projects/f1-telemetry" element={<F1Telemetry />} />
      </Routes>
    </Router>
  );
}

export default App;
