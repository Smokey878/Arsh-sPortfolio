import { useState } from 'react';
import IntroAnimation from './components/IntroAnimation';
import MainWebsite from './components/MainWebsite';

function App() {
  const [showMain, setShowMain] = useState(false);

  return (
    <>
      {!showMain ? (
        <IntroAnimation onFinish={() => setShowMain(true)} />
      ) : (
        <MainWebsite />
      )}
    </>
  );
}

export default App;
