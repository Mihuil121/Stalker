import './App.css';
import Head from './components/Head/Head.tsx';
import Explanation from './components/body/Explanation/Explanation.tsx';
import Heart from './components/body/Heart/Heart.tsx';
import What from './components/body/What/What.tsx';
import Screen from './components/body/Screene/Screen.tsx';
import TextScreen from './components/body/Screene/TextScreen.tsx';
import { SystemRequirements } from './components/body/SystemRequirements/SystemRequirements.tsx';

function App() {
  return (
    <div className="App">
      <Head />
      <div className="background"></div>

      <Explanation />
      <Heart />
      <What />
      <TextScreen />
      <SystemRequirements />
    </div>
  );
}

export default App;
