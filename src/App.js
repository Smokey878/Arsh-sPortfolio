import { useState } from 'react';
import IntroAnimation from './components/IntroAnimation';
import MainWebsite from './components/MainWebsite';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlantWatering from './pages/PlantWatering';
import Portfolio from './pages/Portfolio';
import ConquestGame from './pages/ConquestGame';
import PCBuild from './pages/PCBuild';
import ArtifactOfSalvation from './pages/ArtifactofSalvationGame';
import FloodTrafficAI from './pages/FloodTrafficAI';
import CarBuild from './pages/CarBuild';
import AbyssGPT from './pages/AbyssGPT';
import SpriteAdventureGame from './pages/SpriteAdventureGame';

function App() {
  const [showMain, setShowMain] = useState(false);
  const shouldSkipIntro =
    typeof window !== 'undefined' &&
    new URLSearchParams(window.location.search).get('skipIntro') === 'true';

  return (
    <Router>


      <Routes>
        <Route
          path="/"
          element={
            !showMain && window.location.hash === '' && !shouldSkipIntro ? (
              <IntroAnimation
                onFinish={() => setShowMain(true)}
                onSkipIntro={() => setShowMain(true)}
              />
            ) : (
              <MainWebsite />
            )
          }
        />
        <Route path="/projects/plant-watering" element={<PlantWatering />} />
        <Route path="/projects/portfolio" element={<Portfolio />} />
        <Route path="/projects/ConquestGame" element={<ConquestGame />} />
        <Route path="/projects/PCBuild" element={<PCBuild />} />
        <Route path="/projects/ArtifactOfSalvation" element={<ArtifactOfSalvation />} />
        <Route path="/projects/FloodTrafficAI" element={<FloodTrafficAI />} />
        <Route path="/projects/CarBuild" element={<CarBuild />} />
        <Route path="/projects/AbyssGPT" element={<AbyssGPT />} />
        <Route path="/projects/SpriteAdventureGame" element={<SpriteAdventureGame />} />
      </Routes>
    </Router>
  );
}

export default App;
