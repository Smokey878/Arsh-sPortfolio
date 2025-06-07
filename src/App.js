import { useState } from 'react';
import IntroAnimation from './components/IntroAnimation';
import MainWebsite from './components/MainWebsite';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlantWatering from './pages/PlantWatering';
import Portfolio from './pages/Portfolio';
import ConquestGame from './pages/ConquestGame';
import PCBuild from './pages/PCBuild';

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
        <Route path="/projects/ConquestGame" element={<ConquestGame />} />
        <Route path="/projects/PCBuild" element={<PCBuild />} />
      </Routes>
    </Router>
  );
}

export default App;
