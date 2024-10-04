import './App.css';
import React, { useRef } from 'react';
import Head from './components/Head/Head.tsx';
import Explanation from './components/body/Explanation/Explanation.tsx';
import Heart from './components/body/Heart/Heart.tsx';
import What from './components/body/What/What.tsx';
import Screen from './components/body/Screene/Screen.tsx';
import TextScreen from './components/body/Screene/TextScreen.tsx';
import { SystemRequirements } from './components/body/SystemRequirements/SystemRequirements.tsx';

function App() {
  const explanationRef = useRef(null)
  const heartRef = useRef(null)
  const whatRef = useRef(null)
  const systemRequirementsRef = useRef(null)

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Head
        scrollToSection={scrollToSection}
        explanationRef={explanationRef}
        heartRef={heartRef}
        whatRef={whatRef}
        systemRequirementsRef={systemRequirementsRef}
      />
      <div className="background"></div>
      <div >
        <Explanation />
      </div>
      <div ref={explanationRef} >
        <Heart />
      </div>
      <div ref={heartRef} >
        <What />
      </div>
      <div ref={whatRef} >
        <TextScreen />
      </div>
      <div ref={systemRequirementsRef}>
        <SystemRequirements />
      </div>
    </div>
  );
}

export default App;
